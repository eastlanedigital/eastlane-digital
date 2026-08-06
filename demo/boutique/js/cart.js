// ============================================
// LUXE ATELIER - Shopping Cart
// ============================================

class ShoppingCart {
    constructor() {
        this.items = this.loadFromStorage();
        this.listeners = [];
    }

    loadFromStorage() {
        try {
            const stored = localStorage.getItem('luxeCart');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            return [];
        }
    }

    saveToStorage() {
        localStorage.setItem('luxeCart', JSON.stringify(this.items));
        this.notifyListeners();
    }

    addItem(product, size, color, quantity = 1) {
        const existingIndex = this.items.findIndex(
            item => item.id === product.id && item.size === size && item.color === color
        );

        if (existingIndex > -1) {
            this.items[existingIndex].quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.salePrice || product.price,
                originalPrice: product.price,
                image: product.images[0],
                size: size,
                color: color,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }

        this.saveToStorage();
        this.showNotification(`${product.name} added to cart`);
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveToStorage();
    }

    updateQuantity(index, quantity) {
        if (quantity <= 0) {
            this.removeItem(index);
        } else {
            this.items[index].quantity = quantity;
            this.saveToStorage();
        }
    }

    getSubtotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.saveToStorage();
    }

    onChange(callback) {
        this.listeners.push(callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback(this.items));
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);

        requestAnimationFrame(() => {
            notification.classList.add('show');
        });

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    renderCartDrawer() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        const itemsContainer = document.getElementById('cart-items');
        const subtotalEl = document.getElementById('cart-subtotal');
        const countEl = document.getElementById('cart-count');

        if (!drawer || !itemsContainer) return;

        if (this.items.length === 0) {
            itemsContainer.innerHTML = `
                <div class="cart-empty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="1">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <p>Your cart is empty</p>
                    <a href="products.html" class="btn btn-secondary">Continue Shopping</a>
                </div>
            `;
        } else {
            itemsContainer.innerHTML = this.items.map((item, index) => `
                <div class="cart-item" data-index="${index}">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-meta">${item.color} / ${item.size}</p>
                        <div class="cart-item-price">
                            <span class="current-price">USh ${item.price.toFixed(2)}</span>
                            ${item.originalPrice !== item.price ? `<span class="original-price">USh ${item.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" data-action="decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" data-action="increase" data-index="${index}" aria-label="Increase quantity">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-index="${index}" aria-label="Remove item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            `).join('');
        }

        if (subtotalEl) {
            subtotalEl.textContent = `$${this.getSubtotal().toFixed(2)}`;
        }

        if (countEl) {
            countEl.textContent = this.getItemCount();
            countEl.style.display = this.getItemCount() > 0 ? 'flex' : 'none';
        }

        // Add event listeners
        itemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                const action = e.target.dataset.action;
                const currentQty = this.items[index].quantity;
                this.updateQuantity(index, action === 'increase' ? currentQty + 1 : currentQty - 1);
                this.renderCartDrawer();
            });
        });

        itemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                this.removeItem(index);
                this.renderCartDrawer();
            });
        });
    }

    openDrawer() {
        this.renderCartDrawer();
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (drawer) drawer.classList.add('open');
        if (overlay) overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeDrawer() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (drawer) drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Initialize global cart instance
const cart = new ShoppingCart();