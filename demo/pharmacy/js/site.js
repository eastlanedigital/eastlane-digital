/**
 * MediCare Pharmacy - Site Module
 * Populates business info, footer, contact details, and SEO data
 */

class SiteManager {
    constructor() {
        this.config = CONFIG;
        this.init();
    }

    init() {
        this.populateContactInfo();
        this.populateFooter();
        this.populateSocialLinks();
        this.updateCopyright();
    }

    /** Populate contact section info */
    populateContactInfo() {
        const elements = {
            "contact-address": this.config.business.address,
            "contact-phone": this.config.business.phone,
            "contact-email": this.config.business.email,
            "contact-hours": `${this.config.business.hours.weekday}<br>${this.config.business.hours.weekend}`
        };

        Object.entries(elements).forEach(([id, value]) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = value;
        });
    }

    /** Populate footer social links */
    populateSocialLinks() {
        const container = document.getElementById("footer-social");
        if (!container) return;

        const icons = {
            facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
            twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"/></svg>`,
            instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
            linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`
        };

        const html = Object.entries(this.config.social).map(([key, data]) => `
            <a href="${data.url}" target="_blank" rel="noopener" aria-label="${data.label}">
                ${icons[key] || ""}
            </a>
        `).join("");

        container.innerHTML = html;
    }

    /** Populate footer info */
    populateFooter() {
        // Footer is mostly static HTML, but we can update dynamic elements
    }

    /** Update copyright year */
    updateCopyright() {
        const el = document.getElementById("footer-copyright");
        if (el) {
            const year = new Date().getFullYear();
            el.textContent = `${year} ${this.config.business.name}. All rights reserved.`;
        }
    }
}

// Initialize site manager
window.siteManager = new SiteManager();
