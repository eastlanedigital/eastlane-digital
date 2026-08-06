/**
 * MediCare Pharmacy - Products Module
 * Handles product rendering, filtering, searching, and sorting
 */

class ProductManager {
    constructor() {
        this.products = typeof MEDICINES_DATA !== "undefined" ? MEDICINES_DATA : [];
        this.categories = typeof CATEGORIES !== "undefined" ? CATEGORIES : [];
        this.filteredProducts = [...this.products];
        this.currentCategory = "all";
        this.currentSort = "featured";
        this.currentPage = 1;
        this.itemsPerPage = CONFIG.pagination.itemsPerPage;
        this.searchQuery = "";

        this.init();
    }

    init() {
        this.renderCategories();
        this.renderProducts();
        this.initFilters();
        this.initSearch();
        this.initSort();
    }

    /** Get stock status label */
    getStockStatus(stock) {
        if (stock === 0) return { class: "out-of-stock", text: "Out of Stock" };
        if (stock <= 10) return { class: "low-stock", text: "Low Stock" };
        return { class: "in-stock", text: "In Stock" };
    }

    /** Format price */
    formatPrice(price) {
        return `${CONFIG.currency.symbol} ${price.toLocaleString("en-UG")}`;
    }

    /** Generate star rating HTML */
    getStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        let html = "";

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                html += `<svg viewBox="0 0 24 24" fill="currentColor" class="star"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
            } else if (i === fullStars && hasHalf) {
                html += `<svg viewBox="0 0 24 24" fill="currentColor" class="star"><defs><linearGradient id="half"><stop offset="50%" stop-color="#FBBF24"/><stop offset="50%" stop-color="#E5E7EB"/></linearGradient></defs><path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
            } else {
                html += `<svg viewBox="0 0 24 24" fill="currentColor" class="star empty"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
            }
        }
        return html;
    }

    /** Create product card HTML */
    createProductCard(product) {
        const stockStatus = this.getStockStatus(product.stock);
        const stars = this.getStarRating(product.rating);
        const hasDiscount = product.originalPrice && product.originalPrice > product.price;

        return `
            <article class="product-card" role="listitem" data-product-id="${product.id}">
                <div class="product-card-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="product-stock-badge ${stockStatus.class}">${stockStatus.text}</span>
                    ${product.prescriptionRequired ? `
                        <div class="product-prescription-badge" title="Prescription Required">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" x2="8" y1="13" y2="13"/>
                                <line x1="16" x2="8" y1="17" y2="17"/>
                                <polyline points="10 9 9 9 8 9"/>
                            </svg>
                        </div>
                    ` : ""}
                </div>
                <div class="product-card-body">
                    <div class="product-card-rating">
                        ${stars}
                        <span class="product-card-rating-count">(${product.reviews})</span>
                    </div>
                    <h3 class="product-card-name">${product.name}</h3>
                    <p class="product-card-desc">${product.description}</p>
                    <div class="product-card-footer">
                        <div class="product-card-price">
                            ${this.formatPrice(product.price)}
                            ${hasDiscount ? `<span class="original">${this.formatPrice(product.originalPrice)}</span>` : ""}
                        </div>
                        <div class="product-card-actions">
                            <button class="btn-add-cart" data-add-cart="${product.id}" aria-label="Add to cart" ${product.stock === 0 ? "disabled" : ""}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="8" cy="21" r="1"/>
                                    <circle cx="19" cy="21" r="1"/>
                                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                                </svg>
                            </button>
                            <a href="https://wa.me/${CONFIG.business.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage(product.name, this.formatPrice(product.price)))}" 
                               class="btn-whatsapp" target="_blank" rel="noopener" aria-label="Order via WhatsApp">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    /** Render categories grid */
    renderCategories() {
        const grid = document.getElementById("categories-grid");
        if (!grid) return;

        const categoryCounts = {};
        this.products.forEach(p => {
            categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
        });

        const html = this.categories.map(cat => {
            const count = categoryCounts[cat.id] || 0;
            return `
                <div class="category-card" data-category="${cat.id}" role="listitem" tabindex="0">
                    <div class="category-card-icon">
                        ${cat.icon}
                    </div>
                    <h3 class="category-card-title">${cat.name}</h3>
                    <span class="category-card-count">${count} products</span>
                </div>
            `;
        }).join("");

        grid.innerHTML = html;

        // Click handlers
        grid.querySelectorAll(".category-card").forEach(card => {
            card.addEventListener("click", () => {
                const category = card.dataset.category;
                this.filterByCategory(category);
                // Scroll to products
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            });
        });
    }

    /** Render products grid */
    renderProducts(containerId = "products-grid", page = 1) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Apply all filters
        let products = this.applyFilters();

        // Apply sorting
        products = this.applySorting(products);

        // Apply pagination for all-products page
        if (containerId === "all-products-grid") {
            const start = (page - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            const paginated = products.slice(start, end);

            container.innerHTML = paginated.map(p => this.createProductCard(p)).join("");
            this.renderPagination(products.length, page);
            this.updateProductCount(products.length);
        } else {
            // Homepage - show featured or filtered
            const displayProducts = products.slice(0, 8);
            container.innerHTML = displayProducts.map(p => this.createProductCard(p)).join("");
        }

        // Attach add-to-cart handlers
        container.querySelectorAll("[data-add-cart]").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const productId = parseInt(btn.dataset.addCart);
                const product = this.products.find(p => p.id === productId);
                if (product) {
                    window.cart?.add(product);
                }
            });
        });
    }

    /** Apply all active filters */
    applyFilters() {
        let products = [...this.products];

        // Category filter
        if (this.currentCategory !== "all") {
            products = products.filter(p => p.category === this.currentCategory);
        }

        // Search filter
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            products = products.filter(p => 
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
        }

        // Price range filter (for medicines page)
        const minPrice = document.getElementById("price-min")?.value;
        const maxPrice = document.getElementById("price-max")?.value;
        if (minPrice) products = products.filter(p => p.price >= parseFloat(minPrice));
        if (maxPrice) products = products.filter(p => p.price <= parseFloat(maxPrice));

        // Availability filters
        const inStockOnly = document.getElementById("filter-in-stock")?.checked;
        if (inStockOnly) {
            products = products.filter(p => p.stock > 0);
        }

        const prescriptionOnly = document.getElementById("filter-prescription")?.checked;
        if (prescriptionOnly) {
            products = products.filter(p => p.prescriptionRequired);
        }

        const topRated = document.getElementById("filter-top-rated")?.checked;
        if (topRated) {
            products = products.filter(p => p.rating >= 4.5);
        }

        return products;
    }

    /** Apply sorting */
    applySorting(products) {
        switch (this.currentSort) {
            case "price-low":
                return products.sort((a, b) => a.price - b.price);
            case "price-high":
                return products.sort((a, b) => b.price - a.price);
            case "rating":
                return products.sort((a, b) => b.rating - a.rating);
            case "name":
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case "featured":
            default:
                return products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }
    }

    /** Filter by category */
    filterByCategory(category) {
        this.currentCategory = category;
        this.currentPage = 1;

        // Update tab states
        document.querySelectorAll(".filter-tab").forEach(tab => {
            tab.classList.toggle("active", tab.dataset.category === category);
            tab.setAttribute("aria-selected", tab.dataset.category === category);
        });

        // Update sidebar states
        document.querySelectorAll(".sidebar-category").forEach(cat => {
            cat.classList.toggle("active", cat.dataset.category === category);
        });

        this.renderProducts();
    }

    /** Initialize filter tabs */
    initFilters() {
        document.querySelectorAll(".filter-tab").forEach(tab => {
            tab.addEventListener("click", () => {
                this.filterByCategory(tab.dataset.category);
            });
        });

        // Sidebar categories
        document.querySelectorAll(".sidebar-category").forEach(cat => {
            cat.addEventListener("click", () => {
                this.filterByCategory(cat.dataset.category);
            });
        });

        // Price filter
        document.getElementById("price-apply")?.addEventListener("click", () => {
            this.currentPage = 1;
            this.renderProducts("all-products-grid", 1);
        });

        // Checkbox filters
        document.querySelectorAll(".checkbox-input").forEach(cb => {
            cb.addEventListener("change", () => {
                this.currentPage = 1;
                this.renderProducts("all-products-grid", 1);
            });
        });

        // Reset button
        document.getElementById("sidebar-reset")?.addEventListener("click", () => {
            document.getElementById("price-min").value = "";
            document.getElementById("price-max").value = "";
            document.querySelectorAll(".checkbox-input").forEach(cb => {
                if (cb.id === "filter-in-stock") cb.checked = true;
                else cb.checked = false;
            });
            this.currentCategory = "all";
            this.currentPage = 1;
            this.renderProducts("all-products-grid", 1);

            document.querySelectorAll(".filter-tab, .sidebar-category").forEach(el => {
                el.classList.toggle("active", el.dataset.category === "all");
            });
        });
    }

    /** Initialize sorting */
    initSort() {
        document.getElementById("sort-select")?.addEventListener("change", (e) => {
            this.currentSort = e.target.value;
            this.renderProducts();
        });

        document.getElementById("all-sort-select")?.addEventListener("change", (e) => {
            this.currentSort = e.target.value;
            this.currentPage = 1;
            this.renderProducts("all-products-grid", 1);
        });
    }

    /** Initialize search */
    initSearch() {
        // Hero search
        const heroSearch = document.getElementById("hero-search");
        const heroSearchBtn = document.getElementById("hero-search-btn");

        const doHeroSearch = () => {
            const query = heroSearch?.value.trim();
            if (query) {
                this.searchQuery = query;
                window.location.href = `medicines.html?search=${encodeURIComponent(query)}`;
            }
        };

        heroSearchBtn?.addEventListener("click", doHeroSearch);
        heroSearch?.addEventListener("keypress", (e) => {
            if (e.key === "Enter") doHeroSearch();
        });

        // Search overlay
        const searchInput = document.getElementById("search-input");
        const searchResults = document.getElementById("search-results");

        let searchTimeout;
        searchInput?.addEventListener("input", (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();

            if (!query) {
                searchResults.innerHTML = "";
                return;
            }

            searchTimeout = setTimeout(() => {
                const results = this.products.filter(p => 
                    p.name.toLowerCase().includes(query.toLowerCase()) ||
                    p.description.toLowerCase().includes(query.toLowerCase())
                ).slice(0, 6);

                if (results.length === 0) {
                    searchResults.innerHTML = `<div class="search-no-results">No products found for "${query}"</div>`;
                    return;
                }

                searchResults.innerHTML = results.map(p => `
                    <div class="search-result-item" data-product-id="${p.id}">
                        <img src="${p.image}" alt="${p.name}" class="search-result-image" loading="lazy">
                        <div class="search-result-info">
                            <div class="search-result-name">${p.name}</div>
                            <div class="search-result-category">${p.category.replace("-", " ")}</div>
                        </div>
                        <span class="search-result-price">${this.formatPrice(p.price)}</span>
                    </div>
                `).join("");

                // Click to navigate
                searchResults.querySelectorAll(".search-result-item").forEach(item => {
                    item.addEventListener("click", () => {
                        const id = item.dataset.productId;
                        window.location.href = `medicines.html?product=${id}`;
                    });
                });
            }, 200);
        });
    }

    /** Render pagination */
    renderPagination(totalItems, currentPage) {
        const container = document.getElementById("products-pagination");
        if (!container) return;

        const totalPages = Math.ceil(totalItems / this.itemsPerPage);
        if (totalPages <= 1) {
            container.innerHTML = "";
            return;
        }

        let html = "";

        // Prev button
        html += `<button class="pagination-btn" ${currentPage === 1 ? "disabled" : ""} data-page="${currentPage - 1}" aria-label="Previous page">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>`;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                html += `<button class="pagination-btn ${i === currentPage ? "active" : ""}" data-page="${i}" aria-label="Page ${i}" aria-current="${i === currentPage ? "page" : "false"}">${i}</button>`;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                html += `<span class="pagination-btn" disabled>...</span>`;
            }
        }

        // Next button
        html += `<button class="pagination-btn" ${currentPage === totalPages ? "disabled" : ""} data-page="${currentPage + 1}" aria-label="Next page">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>`;

        container.innerHTML = html;

        container.querySelectorAll("[data-page]").forEach(btn => {
            btn.addEventListener("click", () => {
                const page = parseInt(btn.dataset.page);
                this.currentPage = page;
                this.renderProducts("all-products-grid", page);
                container.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
        });
    }

    /** Update product count text */
    updateProductCount(count) {
        const el = document.getElementById("products-count");
        if (el) {
            el.textContent = `Showing ${count} product${count !== 1 ? "s" : ""}`;
        }
    }

    /** Render sidebar categories for medicines page */
    renderSidebarCategories() {
        const container = document.getElementById("sidebar-categories");
        if (!container) return;

        const categoryCounts = {};
        this.products.forEach(p => {
            categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
        });

        let html = `<button class="sidebar-category ${this.currentCategory === "all" ? "active" : ""}" data-category="all">
            <span>All Products</span>
            <span class="sidebar-category-count">${this.products.length}</span>
        </button>`;

        html += this.categories.map(cat => {
            const count = categoryCounts[cat.id] || 0;
            return `<button class="sidebar-category ${this.currentCategory === cat.id ? "active" : ""}" data-category="${cat.id}">
                <span>${cat.name}</span>
                <span class="sidebar-category-count">${count}</span>
            </button>`;
        }).join("");

        container.innerHTML = html;

        container.querySelectorAll(".sidebar-category").forEach(cat => {
            cat.addEventListener("click", () => {
                this.filterByCategory(cat.dataset.category);
            });
        });
    }
}

// Initialize product manager
window.productManager = new ProductManager();
