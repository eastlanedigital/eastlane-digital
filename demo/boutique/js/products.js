// ============================================
// LUXE ATELIER - Product Management
// ============================================

class ProductManager {
    constructor() {
        this.products = PRODUCTS_DATA || [];
        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.itemsPerPage = STORE_CONFIG?.productsPerPage || 12;
        this.wishlist = this.loadWishlist();
    }

    loadWishlist() {
        try {
            const stored = localStorage.getItem('luxeWishlist');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            return [];
        }
    }

    saveWishlist() {
        localStorage.setItem('luxeWishlist', JSON.stringify(this.wishlist));
    }

    toggleWishlist(productId) {
        const index = this.wishlist.indexOf(productId);
        if (index > -1) {
            this.wishlist.splice(index, 1);
        } else {
            this.wishlist.push(productId);
        }
        this.saveWishlist();
        return index === -1;
    }

    isInWishlist(productId) {
        return this.wishlist.includes(productId);
    }

    getAllProducts() {
        return this.products;
    }

    getFeaturedProducts(limit = 8) {
        return this.products.filter(p => p.featured).slice(0, limit);
    }

    getNewArrivals(limit = 8) {
        return [...this.products].reverse().slice(0, limit);
    }

    getBestSellers(limit = 8) {
        return [...this.products]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }

    getProductsByCategory(category) {
        return this.products.filter(p => p.category === category);
    }

    getProductsByGender(gender) {
        if (gender === 'all') return this.products;
        return this.products.filter(p => p.gender === gender || p.gender === 'unisex');
    }

    searchProducts(query) {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return this.products;

        return this.products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.category.toLowerCase().includes(searchTerm) ||
                   product.brand.toLowerCase().includes(searchTerm) ||
                   product.colors.some(c => c.toLowerCase().includes(searchTerm)) ||
                   product.description.toLowerCase().includes(searchTerm);
        });
    }

    filterProducts(filters) {
        let result = [...this.products];

        if (filters.category && filters.category !== 'all') {
            result = result.filter(p => p.category === filters.category);
        }

        if (filters.gender && filters.gender !== 'all') {
            result = result.filter(p => p.gender === filters.gender || p.gender === 'unisex');
        }

        if (filters.color && filters.color !== 'all') {
            result = result.filter(p => p.colors.some(c => c.toLowerCase().includes(filters.color.toLowerCase())));
        }

        if (filters.size && filters.size !== 'all') {
            result = result.filter(p => p.sizes.includes(filters.size));
        }

        if (filters.minPrice) {
            const minPrice = parseFloat(filters.minPrice);
            result = result.filter(p => (p.salePrice || p.price) >= minPrice);
        }

        if (filters.maxPrice) {
            const maxPrice = parseFloat(filters.maxPrice);
            result = result.filter(p => (p.salePrice || p.price) <= maxPrice);
        }

        if (filters.onSale) {
            result = result.filter(p => p.salePrice !== null);
        }

        if (filters.inStock) {
            result = result.filter(p => p.stock > 0);
        }

        this.filteredProducts = result;
        this.currentPage = 1;
        return result;
    }

    sortProducts(sortBy) {
        const products = [...this.filteredProducts];

        switch (sortBy) {
            case 'price-low':
                products.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
                break;
            case 'price-high':
                products.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
                break;
            case 'rating':
                products.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                products.reverse();
                break;
            case 'name':
                products.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Featured first, then by rating
                products.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return b.rating - a.rating;
                });
        }

        this.filteredProducts = products;
        return products;
    }

    getPaginatedProducts(page = this.currentPage) {
        this.currentPage = page;
        const start = (page - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return {
            products: this.filteredProducts.slice(start, end),
            total: this.filteredProducts.length,
            totalPages: Math.ceil(this.filteredProducts.length / this.itemsPerPage),
            currentPage: page
        };
    }

    getProductById(id) {
        return this.products.find(p => p.id === id);
    }

    getRelatedProducts(productId, limit = 4) {
        const product = this.getProductById(productId);
        if (!product) return [];

        return this.products
            .filter(p => p.id !== productId && (p.category === product.category || p.gender === product.gender))
            .slice(0, limit);
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        let html = '';

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                html += '<svg class="star filled" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
            } else if (i === fullStars && hasHalf) {
                html += '<svg class="star half" viewBox="0 0 24 24"><defs><linearGradient id="half"><stop offset="50%" stop-color="#C9A227"/><stop offset="50%" stop-color="#ECECEC"/></linearGradient></defs><path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
            } else {
                html += '<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
            }
        }
        return html;
    }

    renderProductCard(product) {
        const isOnSale = product.salePrice !== null;
        const isWishlisted = this.isInWishlist(product.id);
        const discount = isOnSale ? Math.round((1 - product.salePrice / product.price) * 100) : 0;

        return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image-wrapper">
                    <a href="products.html?product=${product.id}" class="product-link">
                        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" class="product-image primary">
                        ${product.images[1] ? `<img src="${product.images[1]}" alt="${product.name}" loading="lazy" class="product-image secondary">` : ''}
                    </a>
                    ${isOnSale ? `<span class="sale-badge">-${discount}%</span>` : ''}
                    ${product.stock < 10 ? `<span class="stock-badge low">Low Stock</span>` : ''}
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Add to wishlist">
                        <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="quick-view-btn" data-id="${product.id}" aria-label="Quick view">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Quick View
                    </button>
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h3 class="product-name">
                        <a href="products.html?product=${product.id}">${product.name}</a>
                    </h3>
                    <div class="product-rating">
                        ${this.renderStars(product.rating)}
                        <span class="rating-count">(${product.rating})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">USh ${(product.salePrice || product.price).toFixed(2)}</span>
                        ${isOnSale ? `<span class="original-price">USh ${product.price.toFixed(2)}</span>` : ''}
                    </div>
                </div>
            </article>
        `;
    }

    renderProductGrid(products, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (products.length === 0) {
            container.innerHTML = `
                <div class="no-products">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="1">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
            return;
        }

        container.innerHTML = products.map(p => this.renderProductCard(p)).join('');

        // Add wishlist event listeners
        container.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const productId = btn.dataset.id;
                const added = this.toggleWishlist(productId);
                btn.classList.toggle('active', added);
                btn.querySelector('svg').setAttribute('fill', added ? 'currentColor' : 'none');
            });
        });
    }
}

// Initialize global product manager
const productManager = new ProductManager();