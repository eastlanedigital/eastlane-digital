// ============================================
// LUXE ATELIER - Site Management
// ============================================

class SiteManager {
    constructor() {
        this.config = STORE_CONFIG || {};
    }

    init() {
        this.populateStoreInfo();
        this.populateFooter();
        this.populateSEO();
        this.populateSocialLinks();
    }

    populateStoreInfo() {
        document.querySelectorAll('[data-store]').forEach(el => {
            const key = el.dataset.store;
            if (this.config[key]) {
                if (key === 'phone' && el.tagName === 'A') {
                    el.href = `tel:${this.config[key].replace(/[^0-9+]/g, '')}`;
                } else if (key === 'email' && el.tagName === 'A') {
                    el.href = `mailto:${this.config[key]}`;
                } else if (key === 'address' && el.tagName === 'A') {
                    el.href = `https://maps.google.com/?q=${encodeURIComponent(this.config[key])}`;
                }
                el.textContent = this.config[key];
            }
        });
    }

    populateFooter() {
        const footer = document.querySelector('.site-footer');
        if (!footer) return;

        const hoursContainer = footer.querySelector('.footer-hours');
        if (hoursContainer && this.config.hours) {
            hoursContainer.innerHTML = Object.entries(this.config.hours)
                .map(([day, hours]) => `<p><strong>${day.charAt(0).toUpperCase() + day.slice(1)}:</strong> ${hours}</p>`)
                .join('');
        }
    }

    populateSEO() {
        const title = this.config.seo?.title || 'Luxe Atelier';
        const description = this.config.seo?.description || '';
        const keywords = this.config.seo?.keywords || '';
        const ogImage = this.config.seo?.ogImage || '';

        document.title = title;

        const metaTags = [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: ogImage },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: ogImage }
        ];

        metaTags.forEach(tag => {
            let meta = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                if (tag.name) meta.setAttribute('name', tag.name);
                if (tag.property) meta.setAttribute('property', tag.property);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', tag.content);
        });
    }

    populateSocialLinks() {
        const socialContainer = document.querySelector('.footer-social');
        if (!socialContainer || !this.config.social) return;

        const icons = {
            instagram: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
            facebook: '<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
            twitter: '<svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
            pinterest: '<svg viewBox="0 0 24 24"><line x1="12" y1="8" x2="12" y2="21"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>',
            tiktok: '<svg viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>'
        };

        socialContainer.innerHTML = Object.entries(this.config.social)
            .map(([platform, url]) => `
                <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${platform}">
                    ${icons[platform] || ''}
                </a>
            `).join('');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const siteManager = new SiteManager();
    siteManager.init();
});
