/**
 * MediCare Pharmacy - Configuration
 * All business settings in one place
 */

const CONFIG = {
    // Business Info
    business: {
        name: "MediCare Pharmacy",
        tagline: "Your Health, Our Priority",
        phone: "+256 786 149 416",
        whatsapp: "256786149416",
        email: "eastlanedigital@gmail.com",
        address: "Kampala, Uganda",
        hours: {
            weekday: "Mon - Fri: 8:00 AM - 10:00 PM",
            weekend: "Sat - Sun: 9:00 AM - 8:00 PM"
        }
    },

    // Social Media
    social: {
        facebook: { url: "https://facebook.com/medicarepharmacyug", label: "Facebook" },
        twitter: { url: "https://twitter.com/medicarepharmacyug", label: "Twitter" },
        instagram: { url: "https://instagram.com/medicarepharmacyug", label: "Instagram" },
        linkedin: { url: "https://linkedin.com/company/medicarepharmacyug", label: "LinkedIn" }
    },

    // Cart Settings
    cart: {
        freeShippingThreshold: 50000,
        maxQuantityPerItem: 20,
        storageKey: "medicare_cart"
    },

    // Currency - UGX (Ugandan Shilling)
    currency: {
        symbol: "UGX",
        code: "UGX",
        position: "before"
    },

    // Pagination
    pagination: {
        itemsPerPage: 12
    },

    // WhatsApp Message Template
    whatsappMessage: (productName, productPrice) => 
        `Hello MediCare Pharmacy, I would like to order: ${productName} (${productPrice}). Please confirm availability.`,

    // SEO Defaults
    seo: {
        title: "MediCare Pharmacy - Premium Online Healthcare",
        description: "Your trusted online pharmacy for medicines, supplements, and healthcare products. Fast delivery, genuine products, expert care.",
        keywords: "pharmacy, online pharmacy, medicines, supplements, healthcare"
    }
};
