// ============================================
// LUXE ATELIER - Store Configuration
// ============================================

const STORE_CONFIG = {
    // Store Information
    name: "Luxe Atelier",
    tagline: "Where Elegance Meets Modernity",
    phone: "+256 786 149 416",
    whatsapp: "+256786149416",
    email: "eastlanedigital@gmail.com",
    address: "Kampala, Uganda",

    // Social Links
    social: {
        instagram: "https://instagram.com/luxeatelier",
        facebook: "https://facebook.com/luxeatelier",
        twitter: "https://twitter.com/luxeatelier",
        pinterest: "https://pinterest.com/luxeatelier",
        tiktok: "https://tiktok.com/@luxeatelier"
    },

    // Store Hours
    hours: {
        monday: "10:00 AM - 8:00 PM",
        tuesday: "10:00 AM - 8:00 PM",
        wednesday: "10:00 AM - 8:00 PM",
        thursday: "10:00 AM - 8:00 PM",
        friday: "10:00 AM - 9:00 PM",
        saturday: "10:00 AM - 9:00 PM",
        sunday: "11:00 AM - 6:00 PM"
    },

    // Currency
    currency: "UGX",
    currencySymbol: "USh",

    // Shipping
    freeShippingThreshold: 150,
    standardShipping: 9.99,
    expressShipping: 19.99,

    // Tax
    taxRate: 0.08,

    // Pagination
    productsPerPage: 12,

    // Categories
    categories: [
        { id: "dresses", name: "Dresses", gender: "women" },
        { id: "shirts", name: "Shirts", gender: "all" },
        { id: "t-shirts", name: "T-Shirts", gender: "all" },
        { id: "jeans", name: "Jeans", gender: "all" },
        { id: "trousers", name: "Trousers", gender: "all" },
        { id: "jackets", name: "Jackets", gender: "all" },
        { id: "suits", name: "Suits", gender: "all" },
        { id: "shoes", name: "Shoes", gender: "all" },
        { id: "sneakers", name: "Sneakers", gender: "all" },
        { id: "sandals", name: "Sandals", gender: "all" },
        { id: "watches", name: "Watches", gender: "all" },
        { id: "bags", name: "Bags", gender: "all" },
        { id: "jewelry", name: "Jewelry", gender: "all" },
        { id: "perfumes", name: "Perfumes", gender: "all" },
        { id: "belts", name: "Belts", gender: "all" },
        { id: "sunglasses", name: "Sunglasses", gender: "all" },
        { id: "hats", name: "Hats", gender: "all" }
    ],

    // Featured Collections
    collections: [
        { id: "women", name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" },
        { id: "men", name: "Men", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80" },
        { id: "shoes", name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80" },
        { id: "accessories", name: "Accessories", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80" },
        { id: "bags", name: "Bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80" },
        { id: "jewelry", name: "Jewelry", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
        { id: "new-season", name: "New Season", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80" },
        { id: "sale", name: "Sale", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80" }
    ],

    // Instagram Gallery
    instagramImages: [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80"
    ],

    // Customer Reviews
    reviews: [
        {
            id: 1,
            name: "Sophia Anderson",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
            rating: 5,
            date: "2024-12-15",
            product: "Silk Midi Wrap Dress",
            verified: true,
            text: "Absolutely stunning dress! The silk quality is exceptional and the fit is perfect. I received so many compliments at the gala. Will definitely be ordering more from Luxe Atelier."
        },
        {
            id: 2,
            name: "James Mitchell",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
            rating: 5,
            date: "2024-12-10",
            product: "Classic Two-Piece Suit",
            verified: true,
            text: "The tailoring is impeccable. This suit fits like a glove and the Italian wool feels incredible. Best investment I've made for my professional wardrobe."
        },
        {
            id: 3,
            name: "Emma Chen",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
            rating: 4,
            date: "2024-12-08",
            product: "Leather Tote Bag",
            verified: true,
            text: "Beautiful craftsmanship and the leather smells amazing. It's the perfect size for work and travel. The gold hardware adds such a nice touch."
        },
        {
            id: 4,
            name: "Michael Roberts",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
            rating: 5,
            date: "2024-12-05",
            product: "Leather Oxford Shoes",
            verified: true,
            text: "These are hands down the best dress shoes I've ever owned. The Goodyear welted construction means they'll last for years. Worth every penny."
        },
        {
            id: 5,
            name: "Isabella Martinez",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
            rating: 5,
            date: "2024-12-01",
            product: "Oversized Wool Coat",
            verified: true,
            text: "This coat is everything! The camel color is gorgeous and the oversized fit is so chic. Keeps me warm even in the coldest NYC winters."
        },
        {
            id: 6,
            name: "William Turner",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
            rating: 4,
            date: "2024-11-28",
            product: "Chronograph Watch",
            verified: true,
            text: "A beautiful timepiece that gets noticed everywhere I go. The chronograph functions work flawlessly and the build quality is outstanding."
        }
    ],

    // SEO
    seo: {
        title: "Luxe Atelier | Premium Fashion Boutique",
        description: "Discover luxury fashion at Luxe Atelier. Premium clothing, shoes, accessories, and more. Free shipping on orders over $150.",
        keywords: "luxury fashion, designer clothing, premium boutique, women's fashion, men's fashion, accessories",
        ogImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80"
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STORE_CONFIG };
}
