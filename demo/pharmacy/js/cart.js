/**
 * MediCare Pharmacy - Shopping Cart Module
 * Handles cart operations, localStorage persistence, and drawer UI
 */

class Cart {
    constructor() {
        this.items = [];
        this.storageKey = CONFIG.cart.storageKey;
        this.load();
        this.initDrawer();
    }

    /** Load cart from localStorage */
    load() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            this.items = stored ? JSON.parse(stored) : [];
        } catch (e) {
            this.items = [];
        }
        this.updateBadge();
    }

    /** Save cart to localStorage */
    save() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.items));
        } catch (e) {
            console.warn("Cart save failed:", e);
        }
        this.updateBadge();
    }

    /** Add item to cart */
    add(product, quantity = 1) {
        const existing = this.items.find(item => item.id === product.id);

        if (existing) {
            const newQty = Math.min(existing.quantity + quantity, CONFIG.cart.maxQuantityPerItem);
            if (newQty === existing.quantity) {
                window.showToast?.("Maximum quantity reached", "error");
                return false;
            }
            existing.quantity = newQty;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: Math.min(quantity, CONFIG.cart.maxQuantityPerItem)
            });
        }

        this.save();
        this.render();
        window.showToast?.(`${product.name} added to cart`, "success");
        return true;
    }

    /** Remove item from cart */
    remove(productId) {
        const item = this.items.find(i => i.id === productId);
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
        this.render();
        if (item) {
            window.showToast?.(`${item.name} removed from cart`, "success");
        }
    }

    /** Update item quantity */
    updateQuantity(productId, quantity) {
        const item = this.items.find(i => i.id === productId);
        if (!item) return;

        if (quantity <= 0) {
            this.remove(productId);
            return;
        }

        item.quantity = Math.min(quantity, CONFIG.cart.maxQuantityPerItem);
        this.save();
        this.render();
    }

    /** Get total item count */
    getCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    /** Get subtotal */
    getSubtotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    /** Get total */
    getTotal() {
        return this.getSubtotal();
    }

    /** Clear cart */
    clear() {
        this.items = [];
        this.save();
        this.render();
    }

    /** Update cart badge */
    updateBadge() {
        const badge = document.getElementById("cart-badge");
        if (!badge) return;

        const count = this.getCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? "flex" : "none";

        // Bump animation
        if (count > 0) {
            badge.classList.remove("bump");
            void badge.offsetWidth; // Trigger reflow
            badge.classList.add("bump");
        }
    }

    /** Initialize cart drawer */
    initDrawer() {
        const cartBtn = document.getElementById("nav-cart-btn");
        const cartClose = document.getElementById("cart-close");
        const cartOverlay = document.getElementById("cart-overlay");
        const cartDrawer = document.getElementById("cart-drawer");
        const emptyBtn = document.getElementById("cart-empty-btn");
        const checkoutBtn = document.getElementById("cart-checkout-btn");

        const openDrawer = () => {
            cartOverlay?.classList.add("active");
            cartDrawer?.classList.add("active");
            cartDrawer?.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
            this.render();
        };

        const closeDrawer = () => {
            cartOverlay?.classList.remove("active");
            cartDrawer?.classList.remove("active");
            cartDrawer?.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        };

        cartBtn?.addEventListener("click", openDrawer);
        cartClose?.addEventListener("click", closeDrawer);
        cartOverlay?.addEventListener("click", closeDrawer);
        emptyBtn?.addEventListener("click", closeDrawer);

        checkoutBtn?.addEventListener("click", () => {
            window.showToast?.("Checkout coming soon!", "success");
        });

        // Close on Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && cartDrawer?.classList.contains("active")) {
                closeDrawer();
            }
        });
    }

    /** Render cart items */
    render() {
        const cartItems = document.getElementById("cart-items");
        const cartFooter = document.getElementById("cart-footer");
        const cartEmpty = document.getElementById("cart-empty");
        const cartSubtotal = document.getElementById("cart-subtotal");
        const cartTotal = document.getElementById("cart-total");

        if (!cartItems) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = cartEmpty?.outerHTML || "";
            cartFooter?.style.setProperty("display", "none");
            return;
        }

        cartFooter?.style.setProperty("display", "block");

        const itemsHtml = this.items.map(item => `
            <div class="cart-item" role="listitem">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${CONFIG.currency.symbol} ${item.price.toLocaleString("en-UG")}</div>
                    <div class="cart-item-actions">
                        <button class="cart-item-qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="cart-item-qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
                        <button class="cart-item-remove" data-action="remove" data-id="${item.id}" aria-label="Remove item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join("");

        cartItems.innerHTML = itemsHtml;

        // Update totals
        if (cartSubtotal) cartSubtotal.textContent = `${CONFIG.currency.symbol} ${this.getSubtotal().toLocaleString("en-UG")}`;
        if (cartTotal) cartTotal.textContent = `${CONFIG.currency.symbol} ${this.getTotal().toLocaleString("en-UG")}`;

        // Event delegation for quantity buttons
        cartItems.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-action]");
            if (!btn) return;

            const id = parseInt(btn.dataset.id);
            const action = btn.dataset.action;
            const item = this.items.find(i => i.id === id);
            if (!item) return;

            switch (action) {
                case "increase":
                    this.updateQuantity(id, item.quantity + 1);
                    break;
                case "decrease":
                    this.updateQuantity(id, item.quantity - 1);
                    break;
                case "remove":
                    this.remove(id);
                    break;
            }
        }, { once: true });
    }
}

// Initialize cart globally
window.cart = new Cart();
