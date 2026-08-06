// ============================================
// LUXE ATELIER - Main Application
// ============================================

class App {
    constructor() {
        this.initLoader();
        this.initNavigation();
        this.initMobileMenu();
        this.initScrollAnimations();
        this.initNewsletter();
        this.initBackToTop();
        this.initSearch();
        this.initCartDrawer();
        this.initSmoothScroll();
    }

    initLoader() {
        const loader = document.querySelector('.page-loader');
        if (!loader) return;

        window.addEventListener('load', () => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        });
    }

    initNavigation() {
        const nav = document.querySelector('.main-nav');
        if (!nav) return;

        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }

            lastScroll = currentScroll;
        });

        // Active nav link
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    initMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.mobile-overlay');
        const closeBtn = document.querySelector('.mobile-menu-close');

        if (!toggle || !menu) return;

        const open = () => {
            menu.classList.add('open');
            overlay?.classList.add('show');
            document.body.style.overflow = 'hidden';
            toggle.setAttribute('aria-expanded', 'true');
        };

        const close = () => {
            menu.classList.remove('open');
            overlay?.classList.remove('show');
            document.body.style.overflow = '';
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', open);
        closeBtn?.addEventListener('click', close);
        overlay?.addEventListener('click', close);

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });
    }

    initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const observeElements = () => {
            document.querySelectorAll('.animate-on-scroll:not(.animate-in)').forEach(el => {
                observer.observe(el);
            });
        };

        observeElements();

        // Re-check for dynamically added elements after a delay
        setTimeout(observeElements, 100);
        setTimeout(observeElements, 500);

        // Also expose a method for other scripts to trigger re-observation
        window.reobserveAnimations = observeElements;
    }

    initNewsletter() {
        const forms = document.querySelectorAll('.newsletter-form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]')?.value;
                if (email) {
                    const success = document.createElement('div');
                    success.className = 'newsletter-success';
                    success.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Thank you for subscribing!</span>
                    `;
                    form.innerHTML = '';
                    form.appendChild(success);
                }
            });
        });
    }

    initBackToTop() {
        const btn = document.querySelector('.back-to-top');
        if (!btn) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    initSearch() {
        const searchToggle = document.querySelector('.search-toggle');
        const searchOverlay = document.querySelector('.search-overlay');
        const searchInput = document.querySelector('.search-input');
        const searchClose = document.querySelector('.search-close');

        if (!searchToggle || !searchOverlay) return;

        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('show');
            searchOverlay.setAttribute('aria-hidden', 'false');
            searchInput?.focus();
            document.body.style.overflow = 'hidden';
        });

        searchClose?.addEventListener('click', () => {
            searchOverlay.classList.remove('show');
            searchOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchOverlay.classList.remove('show');
                searchOverlay.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    }

    initCartDrawer() {
        const cartToggle = document.querySelector('.cart-toggle');
        const cartClose = document.querySelector('.cart-close');
        const cartOverlay = document.getElementById('cart-overlay');

        cartToggle?.addEventListener('click', () => cart.openDrawer());
        cartClose?.addEventListener('click', () => cart.closeDrawer());
        cartOverlay?.addEventListener('click', () => cart.closeDrawer());

        // Update cart count on load
        cart.onChange(() => {
            const countEl = document.getElementById('cart-count');
            if (countEl) {
                const count = cart.getItemCount();
                countEl.textContent = count;
                countEl.style.display = count > 0 ? 'flex' : 'none';
            }
        });
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});