// ============================================
// LUXE ATELIER - Product Data
// 100 Premium Fashion Products
// ============================================

const PRODUCTS_DATA = [
    // ========== DRESSES (10) ==========
    {
        id: "dr001",
        name: "Silk Midi Wrap Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1083750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Midnight Black", "Champagne", "Forest Green"],
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"
        ],
        stock: 24,
        featured: true,
        rating: 4.8,
        description: "Crafted from the finest mulberry silk, this wrap dress features a flattering V-neckline, adjustable waist tie, and elegant midi length."
    },
    {
        id: "dr002",
        name: "Linen Summer Maxi Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 746250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Natural Linen", "Terracotta", "Sky Blue"],
        images: [
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80"
        ],
        stock: 18,
        featured: false,
        rating: 4.6,
        description: "Breezy and elegant, this linen maxi dress features a relaxed silhouette, side pockets, and adjustable straps."
    },
    {
        id: "dr003",
        name: "Velvet Evening Gown",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 2058750,
        salePrice: 1608750,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Deep Burgundy", "Midnight Blue", "Emerald"],
        images: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80"
        ],
        stock: 12,
        featured: true,
        rating: 4.9,
        description: "A statement piece for the most special occasions. Luxurious velvet with a fitted bodice, dramatic A-line skirt, and subtle train."
    },
    {
        id: "dr004",
        name: "Cotton Shirt Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Navy", "Sage Green"],
        images: [
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
            "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80"
        ],
        stock: 35,
        featured: false,
        rating: 4.5,
        description: "A timeless shirt dress in premium cotton poplin. Features a classic collar, button front, and optional belt."
    },
    {
        id: "dr005",
        name: "Knitted Bodycon Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 671250,
        salePrice: null,
        sizes: ["S", "M", "L"],
        colors: ["Charcoal", "Camel", "Heather Grey"],
        images: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
        ],
        stock: 20,
        featured: false,
        rating: 4.4,
        description: "Sculptural knitted dress with ribbed texture and long sleeves. The perfect blend of comfort and sophistication."
    },
    {
        id: "dr006",
        name: "Pleated Midi Skirt Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 896250,
        salePrice: 708750,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Blush Pink", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"
        ],
        stock: 15,
        featured: true,
        rating: 4.7,
        description: "Elegant pleated midi dress with a fitted waist and flowing skirt. The pleats create beautiful movement with every step."
    },
    {
        id: "dr007",
        name: "Off-Shoulder Cocktail Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1233750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Ivory", "Ruby Red", "Midnight"],
        images: [
            "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80"
        ],
        stock: 10,
        featured: true,
        rating: 4.8,
        description: "Dramatic off-shoulder cocktail dress with structured bodice and flared skirt. A showstopper for any special occasion."
    },
    {
        id: "dr008",
        name: "Tencel Shirt Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Sand", "Dusty Rose", "Slate"],
        images: [
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
        ],
        stock: 28,
        featured: false,
        rating: 4.5,
        description: "Sustainable Tencel shirt dress with a relaxed fit. Soft, breathable, and effortlessly chic."
    },
    {
        id: "dr009",
        name: "Sequin Mini Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1496250,
        salePrice: 1121250,
        sizes: ["XS", "S", "M"],
        colors: ["Gold", "Silver", "Black"],
        images: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
            "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80"
        ],
        stock: 8,
        featured: true,
        rating: 4.7,
        description: "All-over sequin mini dress with long sleeves and a fitted silhouette. The ultimate party piece."
    },
    {
        id: "dr010",
        name: "Floral Print Wrap Dress",
        category: "dresses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 821250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Spring Floral", "Autumn Floral"],
        images: [
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80"
        ],
        stock: 22,
        featured: false,
        rating: 4.6,
        description: "Beautiful floral print wrap dress in lightweight crepe. Feminine, flattering, and perfect for daytime elegance."
    },

    // ========== SHIRTS (10) ==========
    {
        id: "sh001",
        name: "Oxford Cotton Shirt",
        category: "shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 483750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Light Blue", "Pink", "Lavender"],
        images: [
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80"
        ],
        stock: 45,
        featured: true,
        rating: 4.7,
        description: "Classic Oxford shirt in premium cotton with a structured collar and mother-of-pearl buttons. The foundation of every refined wardrobe."
    },
    {
        id: "sh002",
        name: "Linen Blend Shirt",
        category: "shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 558750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Sand", "Navy", "Sage"],
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80"
        ],
        stock: 38,
        featured: false,
        rating: 4.6,
        description: "Breathable linen-cotton blend shirt with a relaxed fit. Perfect for warm-weather sophistication."
    },
    {
        id: "sh003",
        name: "Silk Blouse",
        category: "shirts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 821250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Ivory", "Black", "Blush", "Sage"],
        images: [
            "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80",
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80",
            "https://images.unsplash.com/photo-1589810635657-4d2298925b6c?w=800&q=80"
        ],
        stock: 30,
        featured: true,
        rating: 4.8,
        description: "Luxurious silk blouse with a relaxed fit, covered buttons, and elegant draped neckline."
    },
    {
        id: "sh004",
        name: "Chambray Work Shirt",
        category: "shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 446250,
        salePrice: 333750,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Indigo", "Light Wash"],
        images: [
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80"
        ],
        stock: 40,
        featured: false,
        rating: 4.5,
        description: "Versatile chambray shirt with a modern slim fit. Dress it up or down for any occasion."
    },
    {
        id: "sh005",
        name: "Pleated Front Blouse",
        category: "shirts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 671250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["White", "Cream", "Dusty Blue"],
        images: [
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80",
            "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80",
            "https://images.unsplash.com/photo-1589810635657-4d2298925b6c?w=800&q=80"
        ],
        stock: 25,
        featured: false,
        rating: 4.6,
        description: "Elegant pleated front blouse with a high neckline and subtle volume in the sleeves."
    },
    {
        id: "sh006",
        name: "Flannel Check Shirt",
        category: "shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 521250,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Red Check", "Navy Check", "Green Check"],
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80"
        ],
        stock: 32,
        featured: false,
        rating: 4.4,
        description: "Soft brushed cotton flannel shirt with classic check pattern. Comfort meets style."
    },
    {
        id: "sh007",
        name: "Satin Tie-Neck Blouse",
        category: "shirts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 746250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Champagne", "Black", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1589810635657-4d2298925b6c?w=800&q=80",
            "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80",
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80"
        ],
        stock: 18,
        featured: true,
        rating: 4.7,
        description: "Luxurious satin blouse with a self-tie neck detail and relaxed fit. Perfect for the office or evening."
    },
    {
        id: "sh008",
        name: "Denim Western Shirt",
        category: "shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 558750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Dark Denim", "Medium Wash", "Black Denim"],
        images: [
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80"
        ],
        stock: 28,
        featured: false,
        rating: 4.5,
        description: "Premium denim western shirt with pearl snap buttons and classic yoke detailing."
    },
    {
        id: "sh009",
        name: "Ruffle Detail Blouse",
        category: "shirts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 633750,
        salePrice: 483750,
        sizes: ["XS", "S", "M", "L"],
        colors: ["White", "Blush", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80",
            "https://images.unsplash.com/photo-1589810635657-4d2298925b6c?w=800&q=80",
            "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80"
        ],
        stock: 20,
        featured: false,
        rating: 4.6,
        description: "Romantic ruffle detail blouse with a V-neckline and delicate gathers. Feminine and refined."
    },
    {
        id: "sh010",
        name: "Performance Dress Shirt",
        category: "shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Light Blue", "Grey"],
        images: [
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80"
        ],
        stock: 50,
        featured: true,
        rating: 4.7,
        description: "Wrinkle-resistant performance dress shirt with stretch fabric for all-day comfort. The modern professional essential."
    },

    // ========== T-SHIRTS (8) ==========
    {
        id: "ts001",
        name: "Premium Cotton T-Shirt",
        category: "t-shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 221250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Navy", "Grey", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
        ],
        stock: 100,
        featured: true,
        rating: 4.8,
        description: "The perfect basic. 100% organic cotton with a tailored fit, reinforced collar, and exceptional softness."
    },
    {
        id: "ts002",
        name: "Oversized Cotton Tee",
        category: "t-shirts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 183750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["White", "Black", "Cream", "Dusty Rose"],
        images: [
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
        ],
        stock: 80,
        featured: false,
        rating: 4.6,
        description: "Effortlessly cool oversized tee in heavyweight organic cotton. Dropped shoulders and a relaxed silhouette."
    },
    {
        id: "ts003",
        name: "Ribbed Knit T-Shirt",
        category: "t-shirts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 258750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "White", "Camel", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
        ],
        stock: 60,
        featured: false,
        rating: 4.5,
        description: "Sculptural ribbed knit tee with a fitted silhouette. The perfect layering piece."
    },
    {
        id: "ts004",
        name: "Pocket T-Shirt",
        category: "t-shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 243750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Heather Grey", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
        ],
        stock: 75,
        featured: false,
        rating: 4.6,
        description: "Classic pocket tee in premium cotton jersey. Clean lines and a modern fit."
    },
    {
        id: "ts005",
        name: "Striped Breton T-Shirt",
        category: "t-shirts",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 296250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Navy/White", "Black/White", "Red/White"],
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80"
        ],
        stock: 55,
        featured: true,
        rating: 4.7,
        description: "Timeless Breton stripe tee in heavyweight cotton. A wardrobe staple with nautical charm."
    },
    {
        id: "ts006",
        name: "V-Neck Cotton Tee",
        category: "t-shirts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 206250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Black", "Navy", "Grey"],
        images: [
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
        ],
        stock: 70,
        featured: false,
        rating: 4.5,
        description: "Elegant V-neck tee in soft organic cotton. A versatile essential for any wardrobe."
    },
    {
        id: "ts007",
        name: "Long Sleeve Henley",
        category: "t-shirts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 333750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Heather Grey", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
        ],
        stock: 45,
        featured: false,
        rating: 4.6,
        description: "Classic Henley with a three-button placket in premium cotton jersey. Layer-ready comfort."
    },
    {
        id: "ts008",
        name: "Cropped Boxy T-Shirt",
        category: "t-shirts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 221250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["White", "Black", "Sage", "Lavender"],
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
        ],
        stock: 65,
        featured: false,
        rating: 4.4,
        description: "Modern cropped boxy tee with a relaxed fit. Perfect for high-waisted styling."
    },

    // ========== JEANS (8) ==========
    {
        id: "jn001",
        name: "Slim Fit Selvedge Jeans",
        category: "jeans",
        gender: "men",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Raw Indigo", "Washed Indigo", "Black"],
        images: [
            "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80",
            "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80"
        ],
        stock: 40,
        featured: true,
        rating: 4.8,
        description: "Japanese selvedge denim with a modern slim fit. Crafted to develop a unique patina over time."
    },
    {
        id: "jn002",
        name: "High-Waist Straight Jeans",
        category: "jeans",
        gender: "women",
        brand: "Luxe Atelier",
        price: 633750,
        salePrice: null,
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"],
        colors: ["Light Wash", "Medium Wash", "Dark Wash", "Black"],
        images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
            "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80",
            "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80"
        ],
        stock: 55,
        featured: true,
        rating: 4.7,
        description: "Flattering high-waist straight-leg jeans in premium stretch denim. Timeless and versatile."
    },
    {
        id: "jn003",
        name: "Wide Leg Cropped Jeans",
        category: "jeans",
        gender: "women",
        brand: "Luxe Atelier",
        price: 671250,
        salePrice: null,
        sizes: ["24", "25", "26", "27", "28", "29", "30"],
        colors: ["Vintage Blue", "White", "Black"],
        images: [
            "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
            "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80"
        ],
        stock: 35,
        featured: false,
        rating: 4.6,
        description: "Fashion-forward wide leg cropped jeans with a relaxed silhouette. Modern elegance."
    },
    {
        id: "jn004",
        name: "Relaxed Tapered Jeans",
        category: "jeans",
        gender: "men",
        brand: "Luxe Atelier",
        price: 633750,
        salePrice: null,
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Light Wash", "Medium Wash", "Dark Wash"],
        images: [
            "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
            "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80"
        ],
        stock: 42,
        featured: false,
        rating: 4.5,
        description: "Comfortable relaxed fit with a tapered leg. Premium denim with a lived-in feel."
    },
    {
        id: "jn005",
        name: "Mom Fit Jeans",
        category: "jeans",
        gender: "women",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: 483750,
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        colors: ["Vintage Blue", "Black", "White"],
        images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
            "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80",
            "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80"
        ],
        stock: 48,
        featured: false,
        rating: 4.6,
        description: "Classic mom fit jeans with a high waist and tapered leg. Retro-inspired modern comfort."
    },
    {
        id: "jn006",
        name: "Distressed Slim Jeans",
        category: "jeans",
        gender: "men",
        brand: "Luxe Atelier",
        price: 671250,
        salePrice: null,
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["Light Wash", "Medium Wash"],
        images: [
            "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80",
            "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80"
        ],
        stock: 30,
        featured: false,
        rating: 4.4,
        description: "Artfully distressed slim jeans with subtle rips and abrasions. Edgy yet refined."
    },
    {
        id: "jn007",
        name: "Flare Jeans",
        category: "jeans",
        gender: "women",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["24", "25", "26", "27", "28", "29", "30"],
        colors: ["Dark Wash", "Black", "White"],
        images: [
            "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
            "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80"
        ],
        stock: 25,
        featured: false,
        rating: 4.5,
        description: "70s-inspired flare jeans with a high waist and dramatic leg opening. Bold and beautiful."
    },
    {
        id: "jn008",
        name: "Straight Leg Jeans",
        category: "jeans",
        gender: "men",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: null,
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Raw Indigo", "Washed Indigo", "Black", "Grey"],
        images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
            "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80",
            "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80"
        ],
        stock: 50,
        featured: false,
        rating: 4.6,
        description: "Classic straight leg jeans in premium denim. The ultimate versatile piece."
    },

    // ========== TROUSERS (8) ==========
    {
        id: "tr001",
        name: "Wool Blend Trousers",
        category: "trousers",
        gender: "men",
        brand: "Luxe Atelier",
        price: 821250,
        salePrice: null,
        sizes: ["30", "32", "34", "36", "38", "40"],
        colors: ["Charcoal", "Navy", "Black", "Taupe"],
        images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80"
        ],
        stock: 35,
        featured: true,
        rating: 4.8,
        description: "Impeccably tailored wool blend trousers with a modern slim fit. The cornerstone of professional style."
    },
    {
        id: "tr002",
        name: "Wide Leg Trousers",
        category: "trousers",
        gender: "women",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Cream", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80"
        ],
        stock: 30,
        featured: true,
        rating: 4.7,
        description: "Elegant wide leg trousers with a high waist and front pleats. Sophisticated and flowing."
    },
    {
        id: "tr003",
        name: "Cotton Chino Trousers",
        category: "trousers",
        gender: "men",
        brand: "Luxe Atelier",
        price: 521250,
        salePrice: null,
        sizes: ["30", "32", "34", "36", "38", "40"],
        colors: ["Khaki", "Navy", "Olive", "Stone"],
        images: [
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80"
        ],
        stock: 45,
        featured: false,
        rating: 4.6,
        description: "Classic chino trousers in premium cotton twill. Versatile, comfortable, and always appropriate."
    },
    {
        id: "tr004",
        name: "Paperbag Waist Trousers",
        category: "trousers",
        gender: "women",
        brand: "Luxe Atelier",
        price: 633750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Camel", "White", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
        ],
        stock: 28,
        featured: false,
        rating: 4.5,
        description: "Trendy paperbag waist trousers with a self-tie belt and tapered leg. Modern femininity."
    },
    {
        id: "tr005",
        name: "Linen Drawstring Trousers",
        category: "trousers",
        gender: "men",
        brand: "Luxe Atelier",
        price: 558750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Natural", "Navy", "Olive", "White"],
        images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80"
        ],
        stock: 38,
        featured: false,
        rating: 4.5,
        description: "Relaxed linen trousers with an elasticated drawstring waist. Effortless summer style."
    },
    {
        id: "tr006",
        name: "Cropped Tailored Trousers",
        category: "trousers",
        gender: "women",
        brand: "Luxe Atelier",
        price: 671250,
        salePrice: 558750,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Grey", "White"],
        images: [
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
        ],
        stock: 32,
        featured: false,
        rating: 4.6,
        description: "Sharp cropped tailored trousers with a slim fit and ankle length. Professional polish."
    },
    {
        id: "tr007",
        name: "Corduroy Trousers",
        category: "trousers",
        gender: "men",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: null,
        sizes: ["30", "32", "34", "36", "38"],
        colors: ["Tan", "Navy", "Olive", "Burgundy"],
        images: [
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80"
        ],
        stock: 25,
        featured: false,
        rating: 4.4,
        description: "Premium cotton corduroy trousers with a modern straight fit. Textured warmth for cooler days."
    },
    {
        id: "tr008",
        name: "Pleated Palazzo Trousers",
        category: "trousers",
        gender: "women",
        brand: "Luxe Atelier",
        price: 746250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Navy", "Cream", "Sage"],
        images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80"
        ],
        stock: 20,
        featured: false,
        rating: 4.5,
        description: "Dramatic pleated palazzo trousers with a high waist and flowing wide leg. Statement elegance."
    },

    // ========== JACKETS (8) ==========
    {
        id: "jk001",
        name: "Leather Biker Jacket",
        category: "jackets",
        gender: "men",
        brand: "Luxe Atelier",
        price: 2246250,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Brown", "Tan"],
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80"
        ],
        stock: 15,
        featured: true,
        rating: 4.9,
        description: "Handcrafted from full-grain Italian leather. Classic biker silhouette with asymmetric zip and quilted shoulders."
    },
    {
        id: "jk002",
        name: "Oversized Wool Coat",
        category: "jackets",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1683750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Camel", "Black", "Grey", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
        ],
        stock: 20,
        featured: true,
        rating: 4.8,
        description: "Luxurious oversized wool coat with a relaxed silhouette and concealed button closure. Winter sophistication."
    },
    {
        id: "jk003",
        name: "Bomber Jacket",
        category: "jackets",
        gender: "men",
        brand: "Luxe Atelier",
        price: 1083750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy", "Olive", "Burgundy"],
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80"
        ],
        stock: 25,
        featured: false,
        rating: 4.6,
        description: "Classic bomber jacket in premium nylon with ribbed trims. A timeless streetwear staple."
    },
    {
        id: "jk004",
        name: "Trench Coat",
        category: "jackets",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1496250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Beige", "Black", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
        ],
        stock: 18,
        featured: true,
        rating: 4.8,
        description: "Iconic double-breasted trench coat in water-resistant cotton gabardine. Belted waist and storm flaps."
    },
    {
        id: "jk005",
        name: "Denim Jacket",
        category: "jackets",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Medium Wash", "Dark Wash", "Black"],
        images: [
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
        ],
        stock: 40,
        featured: false,
        rating: 4.5,
        description: "Classic denim jacket in premium selvedge denim. A wardrobe essential that gets better with age."
    },
    {
        id: "jk006",
        name: "Puffer Jacket",
        category: "jackets",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1233750,
        salePrice: 1046250,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Olive", "Cream"],
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
        ],
        stock: 22,
        featured: false,
        rating: 4.6,
        description: "Lightweight yet warm puffer jacket with a cropped silhouette and high collar. Modern winter essential."
    },
    {
        id: "jk007",
        name: "Blazer",
        category: "jackets",
        gender: "men",
        brand: "Luxe Atelier",
        price: 1308750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Navy", "Charcoal", "Black", "Light Grey"],
        images: [
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
        ],
        stock: 30,
        featured: true,
        rating: 4.7,
        description: "Sharp tailored blazer in premium wool blend. Single-breasted with notch lapels. The definition of smart casual."
    },
    {
        id: "jk008",
        name: "Faux Fur Jacket",
        category: "jackets",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1421250,
        salePrice: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Cream", "Black", "Grey", "Blush"],
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80"
        ],
        stock: 12,
        featured: true,
        rating: 4.7,
        description: "Luxurious faux fur jacket with a boxy silhouette and hook closure. Glamorous and cruelty-free."
    },

    // ========== SUITS (6) ==========
    {
        id: "st001",
        name: "Classic Two-Piece Suit",
        category: "suits",
        gender: "men",
        brand: "Luxe Atelier",
        price: 2996250,
        salePrice: null,
        sizes: ["46", "48", "50", "52", "54", "56"],
        colors: ["Navy", "Charcoal", "Black", "Light Grey"],
        images: [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80"
        ],
        stock: 18,
        featured: true,
        rating: 4.9,
        description: "Impeccably tailored two-piece suit in premium Italian wool. Jacket with notch lapels, trousers with side adjusters."
    },
    {
        id: "st002",
        name: "Women's Power Suit",
        category: "suits",
        gender: "women",
        brand: "Luxe Atelier",
        price: 2433750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Navy", "Black", "Cream", "Burgundy"],
        images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80"
        ],
        stock: 15,
        featured: true,
        rating: 4.8,
        description: "Empowering women's suit with a tailored blazer and straight-leg trousers. Modern power dressing."
    },
    {
        id: "st003",
        name: "Three-Piece Suit",
        category: "suits",
        gender: "men",
        brand: "Luxe Atelier",
        price: 3746250,
        salePrice: null,
        sizes: ["46", "48", "50", "52", "54"],
        colors: ["Navy", "Charcoal", "Black"],
        images: [
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
        ],
        stock: 10,
        featured: true,
        rating: 4.9,
        description: "Complete three-piece suit with jacket, trousers, and matching waistcoat. The pinnacle of formal elegance."
    },
    {
        id: "st004",
        name: "Linen Summer Suit",
        category: "suits",
        gender: "men",
        brand: "Luxe Atelier",
        price: 2246250,
        salePrice: 1871250,
        sizes: ["46", "48", "50", "52", "54"],
        colors: ["Natural", "Navy", "Light Grey"],
        images: [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
        ],
        stock: 12,
        featured: false,
        rating: 4.7,
        description: "Breathable linen suit perfect for summer weddings and events. Relaxed yet refined."
    },
    {
        id: "st005",
        name: "Tuxedo",
        category: "suits",
        gender: "men",
        brand: "Luxe Atelier",
        price: 3371250,
        salePrice: null,
        sizes: ["46", "48", "50", "52", "54"],
        colors: ["Black", "Midnight Blue"],
        images: [
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
        ],
        stock: 8,
        featured: true,
        rating: 4.9,
        description: "Classic peak lapel tuxedo with satin trim. The ultimate black-tie statement."
    },
    {
        id: "st006",
        name: "Women's Tuxedo Jumpsuit",
        category: "suits",
        gender: "women",
        brand: "Luxe Atelier",
        price: 2058750,
        salePrice: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "White"],
        images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80"
        ],
        stock: 14,
        featured: false,
        rating: 4.7,
        description: "Dramatic tuxedo jumpsuit with satin lapels and wide-leg trousers. Bold evening elegance."
    },

    // ========== SHOES (8) ==========
    {
        id: "sho001",
        name: "Leather Oxford Shoes",
        category: "shoes",
        gender: "men",
        brand: "Luxe Atelier",
        price: 1308750,
        salePrice: null,
        sizes: ["40", "41", "42", "43", "44", "45", "46"],
        colors: ["Black", "Tan", "Burgundy"],
        images: [
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
        ],
        stock: 25,
        featured: true,
        rating: 4.9,
        description: "Handcrafted leather Oxford shoes with Goodyear welted construction. The foundation of formal footwear."
    },
    {
        id: "sho002",
        name: "Pointed Toe Pumps",
        category: "shoes",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1083750,
        salePrice: null,
        sizes: ["35", "36", "37", "38", "39", "40", "41"],
        colors: ["Black", "Nude", "Red", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"
        ],
        stock: 30,
        featured: true,
        rating: 4.8,
        description: "Elegant pointed toe pumps in premium leather with a comfortable 85mm heel. Timeless sophistication."
    },
    {
        id: "sho003",
        name: "Chelsea Boots",
        category: "shoes",
        gender: "men",
        brand: "Luxe Atelier",
        price: 1121250,
        salePrice: null,
        sizes: ["40", "41", "42", "43", "44", "45"],
        colors: ["Black", "Tan", "Dark Brown"],
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"
        ],
        stock: 35,
        featured: false,
        rating: 4.7,
        description: "Classic Chelsea boots in premium leather with elastic side panels. Versatile and enduring."
    },
    {
        id: "sho004",
        name: "Ankle Strap Heels",
        category: "shoes",
        gender: "women",
        brand: "Luxe Atelier",
        price: 971250,
        salePrice: null,
        sizes: ["35", "36", "37", "38", "39", "40"],
        colors: ["Black", "Nude", "Burgundy", "Gold"],
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"
        ],
        stock: 28,
        featured: false,
        rating: 4.6,
        description: "Elegant ankle strap heels with a sleek stiletto heel. Perfect for evening occasions."
    },
    {
        id: "sho005",
        name: "Loafers",
        category: "shoes",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 933750,
        salePrice: null,
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Black", "Brown", "Tan", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
        ],
        stock: 40,
        featured: true,
        rating: 4.8,
        description: "Classic leather loafers with a penny strap detail. Effortless sophistication for any occasion."
    },
    {
        id: "sho006",
        name: "Strappy Sandals",
        category: "shoes",
        gender: "women",
        brand: "Luxe Atelier",
        price: 746250,
        salePrice: null,
        sizes: ["35", "36", "37", "38", "39", "40", "41"],
        colors: ["Black", "Nude", "White", "Gold"],
        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"
        ],
        stock: 35,
        featured: false,
        rating: 4.5,
        description: "Minimalist strappy sandals with a low block heel. Elegant and comfortable for all-day wear."
    },
    {
        id: "sho007",
        name: "Monk Strap Shoes",
        category: "shoes",
        gender: "men",
        brand: "Luxe Atelier",
        price: 1233750,
        salePrice: null,
        sizes: ["40", "41", "42", "43", "44", "45", "46"],
        colors: ["Black", "Tan", "Burgundy"],
        images: [
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
        ],
        stock: 20,
        featured: true,
        rating: 4.8,
        description: "Double monk strap shoes in premium leather. A sophisticated alternative to Oxfords."
    },
    {
        id: "sho008",
        name: "Ballet Flats",
        category: "shoes",
        gender: "women",
        brand: "Luxe Atelier",
        price: 671250,
        salePrice: null,
        sizes: ["35", "36", "37", "38", "39", "40", "41"],
        colors: ["Black", "Nude", "Red", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"
        ],
        stock: 45,
        featured: false,
        rating: 4.6,
        description: "Classic ballet flats with a pointed toe and cushioned insole. Everyday elegance."
    },

    // ========== SNEAKERS (6) ==========
    {
        id: "sn001",
        name: "Leather Low-Top Sneakers",
        category: "sneakers",
        gender: "men",
        brand: "Luxe Atelier",
        price: 858750,
        salePrice: null,
        sizes: ["40", "41", "42", "43", "44", "45", "46"],
        colors: ["White", "Black", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"
        ],
        stock: 50,
        featured: true,
        rating: 4.8,
        description: "Minimalist leather low-top sneakers with a clean silhouette and cushioned sole. Modern luxury."
    },
    {
        id: "sn002",
        name: "Canvas High-Top Sneakers",
        category: "sneakers",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: null,
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["White", "Black", "Navy", "Red"],
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"
        ],
        stock: 60,
        featured: false,
        rating: 4.6,
        description: "Classic high-top sneakers in premium canvas with leather trim. Streetwear meets sophistication."
    },
    {
        id: "sn003",
        name: "Running Sneakers",
        category: "sneakers",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
        colors: ["White", "Black", "Grey", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"
        ],
        stock: 55,
        featured: false,
        rating: 4.7,
        description: "Performance running sneakers with breathable mesh upper and responsive cushioning. Style meets function."
    },
    {
        id: "sn004",
        name: "Platform Sneakers",
        category: "sneakers",
        gender: "women",
        brand: "Luxe Atelier",
        price: 746250,
        salePrice: null,
        sizes: ["35", "36", "37", "38", "39", "40", "41"],
        colors: ["White", "Black", "Beige"],
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
        ],
        stock: 40,
        featured: false,
        rating: 4.5,
        description: "Trendy platform sneakers with a chunky sole and clean leather upper. Elevated street style."
    },
    {
        id: "sn005",
        name: "Suede Sneakers",
        category: "sneakers",
        gender: "men",
        brand: "Luxe Atelier",
        price: 783750,
        salePrice: null,
        sizes: ["40", "41", "42", "43", "44", "45"],
        colors: ["Navy", "Tan", "Grey", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
        ],
        stock: 35,
        featured: false,
        rating: 4.6,
        description: "Premium suede sneakers with a minimalist design and rubber sole. Understated luxury."
    },
    {
        id: "sn006",
        name: "Slip-On Sneakers",
        category: "sneakers",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 558750,
        salePrice: null,
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["White", "Black", "Navy", "Grey"],
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"
        ],
        stock: 65,
        featured: false,
        rating: 4.5,
        description: "Effortless slip-on sneakers with elastic gussets and a cushioned footbed. Easy elegance."
    },

    // ========== SANDALS (4) ==========
    {
        id: "sd001",
        name: "Leather Gladiator Sandals",
        category: "sandals",
        gender: "women",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["35", "36", "37", "38", "39", "40", "41"],
        colors: ["Tan", "Black", "White"],
        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"
        ],
        stock: 30,
        featured: true,
        rating: 4.6,
        description: "Handcrafted leather gladiator sandals with multiple straps and a flat sole. Summer essential."
    },
    {
        id: "sd002",
        name: "Birken-Style Sandals",
        category: "sandals",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 483750,
        salePrice: null,
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        colors: ["Brown", "Black", "Tan"],
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80"
        ],
        stock: 45,
        featured: false,
        rating: 4.5,
        description: "Comfortable cork footbed sandals with premium leather straps. Relaxed luxury."
    },
    {
        id: "sd003",
        name: "Wedge Espadrilles",
        category: "sandals",
        gender: "women",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: null,
        sizes: ["35", "36", "37", "38", "39", "40"],
        colors: ["Natural", "Black", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"
        ],
        stock: 25,
        featured: false,
        rating: 4.4,
        description: "Elegant wedge espadrilles with a jute sole and ankle strap. Mediterranean charm."
    },
    {
        id: "sd004",
        name: "Slide Sandals",
        category: "sandals",
        gender: "men",
        brand: "Luxe Atelier",
        price: 371250,
        salePrice: null,
        sizes: ["40", "41", "42", "43", "44", "45", "46"],
        colors: ["Black", "Brown", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
        ],
        stock: 50,
        featured: false,
        rating: 4.3,
        description: "Minimalist leather slide sandals with a contoured footbed. Poolside to street."
    },

    // ========== WATCHES (6) ==========
    {
        id: "wt001",
        name: "Classic Leather Watch",
        category: "watches",
        gender: "men",
        brand: "Luxe Atelier",
        price: 1496250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Brown", "Black", "Tan"],
        images: [
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80"
        ],
        stock: 20,
        featured: true,
        rating: 4.9,
        description: "Elegant automatic watch with a stainless steel case and genuine leather strap. Timeless precision."
    },
    {
        id: "wt002",
        name: "Minimalist Mesh Watch",
        category: "watches",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1121250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Silver", "Rose Gold", "Gold"],
        images: [
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80"
        ],
        stock: 25,
        featured: true,
        rating: 4.7,
        description: "Sleek minimalist watch with a mesh bracelet and clean dial. Understated elegance."
    },
    {
        id: "wt003",
        name: "Chronograph Watch",
        category: "watches",
        gender: "men",
        brand: "Luxe Atelier",
        price: 2058750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Silver", "Black", "Gold"],
        images: [
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80"
        ],
        stock: 15,
        featured: true,
        rating: 4.8,
        description: "Sophisticated chronograph watch with multiple sub-dials and a stainless steel bracelet. Precision engineering."
    },
    {
        id: "wt004",
        name: "Pearl Dial Watch",
        category: "watches",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1683750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Rose Gold", "Silver", "Gold"],
        images: [
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80"
        ],
        stock: 18,
        featured: false,
        rating: 4.7,
        description: "Delicate watch with a mother-of-pearl dial and diamond hour markers. Feminine luxury."
    },
    {
        id: "wt005",
        name: "Sport Watch",
        category: "watches",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 1308750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Navy", "Grey"],
        images: [
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80"
        ],
        stock: 30,
        featured: false,
        rating: 4.6,
        description: "Durable sport watch with a rubber strap and water resistance to 100m. Active elegance."
    },
    {
        id: "wt006",
        name: "Dress Watch",
        category: "watches",
        gender: "men",
        brand: "Luxe Atelier",
        price: 1871250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Silver", "Gold", "Black"],
        images: [
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80"
        ],
        stock: 12,
        featured: true,
        rating: 4.9,
        description: "Ultra-thin dress watch with a sapphire crystal and alligator leather strap. Formal perfection."
    },

    // ========== BAGS (6) ==========
    {
        id: "bg001",
        name: "Leather Tote Bag",
        category: "bags",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1683750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Tan", "Navy", "Cognac"],
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
        ],
        stock: 25,
        featured: true,
        rating: 4.8,
        description: "Spacious leather tote with a structured silhouette and gold hardware. The ultimate everyday bag."
    },
    {
        id: "bg002",
        name: "Crossbody Bag",
        category: "bags",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1121250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Tan", "Burgundy", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
        ],
        stock: 35,
        featured: false,
        rating: 4.7,
        description: "Compact crossbody bag with an adjustable strap and multiple compartments. Hands-free elegance."
    },
    {
        id: "bg003",
        name: "Leather Briefcase",
        category: "bags",
        gender: "men",
        brand: "Luxe Atelier",
        price: 2246250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Tan"],
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80"
        ],
        stock: 15,
        featured: true,
        rating: 4.9,
        description: "Professional leather briefcase with a padded laptop compartment and brass hardware. Boardroom ready."
    },
    {
        id: "bg004",
        name: "Clutch Bag",
        category: "bags",
        gender: "women",
        brand: "Luxe Atelier",
        price: 933750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Gold", "Silver", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
        ],
        stock: 20,
        featured: false,
        rating: 4.6,
        description: "Elegant evening clutch with a chain strap and magnetic closure. Perfect for special occasions."
    },
    {
        id: "bg005",
        name: "Backpack",
        category: "bags",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 1308750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Navy", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
        ],
        stock: 30,
        featured: false,
        rating: 4.7,
        description: "Premium leather backpack with padded straps and multiple compartments. Commute in style."
    },
    {
        id: "bg006",
        name: "Weekender Bag",
        category: "bags",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 1871250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Tan", "Black", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80"
        ],
        stock: 18,
        featured: true,
        rating: 4.8,
        description: "Large leather weekender bag with a detachable shoulder strap. Travel in luxury."
    },

    // ========== JEWELRY (6) ==========
    {
        id: "jw001",
        name: "Gold Chain Necklace",
        category: "jewelry",
        gender: "women",
        brand: "Luxe Atelier",
        price: 1121250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Gold", "Silver", "Rose Gold"],
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
            "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
        ],
        stock: 30,
        featured: true,
        rating: 4.8,
        description: "Delicate gold chain necklace with a minimalist pendant. Layer it or wear it solo."
    },
    {
        id: "jw002",
        name: "Diamond Stud Earrings",
        category: "jewelry",
        gender: "women",
        brand: "Luxe Atelier",
        price: 3371250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["White Gold", "Yellow Gold", "Rose Gold"],
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
            "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
        ],
        stock: 15,
        featured: true,
        rating: 4.9,
        description: "Sparkling diamond stud earrings set in 18k gold. The ultimate everyday luxury."
    },
    {
        id: "jw003",
        name: "Cuff Bracelet",
        category: "jewelry",
        gender: "women",
        brand: "Luxe Atelier",
        price: 858750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Gold", "Silver", "Rose Gold"],
        images: [
            "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
        ],
        stock: 25,
        featured: false,
        rating: 4.6,
        description: "Sleek cuff bracelet with a hammered texture. Stack it or wear it alone."
    },
    {
        id: "jw004",
        name: "Signet Ring",
        category: "jewelry",
        gender: "men",
        brand: "Luxe Atelier",
        price: 1308750,
        salePrice: null,
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["Gold", "Silver"],
        images: [
            "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
        ],
        stock: 20,
        featured: false,
        rating: 4.7,
        description: "Classic signet ring with an engraved crest. A timeless symbol of heritage."
    },
    {
        id: "jw005",
        name: "Pearl Drop Earrings",
        category: "jewelry",
        gender: "women",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["White", "Cream", "Pink"],
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
            "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
        ],
        stock: 22,
        featured: false,
        rating: 4.5,
        description: "Elegant freshwater pearl drop earrings with gold hooks. Classic femininity."
    },
    {
        id: "jw006",
        name: "Layered Necklace Set",
        category: "jewelry",
        gender: "women",
        brand: "Luxe Atelier",
        price: 971250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Gold", "Silver"],
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
            "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
        ],
        stock: 28,
        featured: true,
        rating: 4.7,
        description: "Set of three delicate necklaces designed to be worn together. Effortless layering."
    },

    // ========== PERFUMES (4) ==========
    {
        id: "pf001",
        name: "Noir Eau de Parfum",
        category: "perfumes",
        gender: "men",
        brand: "Luxe Atelier",
        price: 483750,
        salePrice: null,
        sizes: ["50ml", "100ml"],
        colors: ["One Color"],
        images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
            "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
        ],
        stock: 40,
        featured: true,
        rating: 4.8,
        description: "A bold fragrance with notes of black pepper, cedarwood, and amber. Masculine and mysterious."
    },
    {
        id: "pf002",
        name: "Rose Eau de Parfum",
        category: "perfumes",
        gender: "women",
        brand: "Luxe Atelier",
        price: 446250,
        salePrice: null,
        sizes: ["50ml", "100ml"],
        colors: ["One Color"],
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
            "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
        ],
        stock: 45,
        featured: true,
        rating: 4.7,
        description: "A romantic fragrance with notes of Turkish rose, jasmine, and vanilla. Feminine and captivating."
    },
    {
        id: "pf003",
        name: "Citrus Eau de Toilette",
        category: "perfumes",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 371250,
        salePrice: null,
        sizes: ["50ml", "100ml"],
        colors: ["One Color"],
        images: [
            "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
        ],
        stock: 50,
        featured: false,
        rating: 4.6,
        description: "A fresh fragrance with notes of bergamot, lemon, and white musk. Clean and invigorating."
    },
    {
        id: "pf004",
        name: "Oud Eau de Parfum",
        category: "perfumes",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: null,
        sizes: ["50ml", "100ml"],
        colors: ["One Color"],
        images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
            "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
        ],
        stock: 30,
        featured: false,
        rating: 4.8,
        description: "An opulent fragrance with notes of oud, saffron, and sandalwood. Rich and exotic."
    },

    // ========== BELTS (4) ==========
    {
        id: "bl001",
        name: "Leather Dress Belt",
        category: "belts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 333750,
        salePrice: null,
        sizes: ["85cm", "90cm", "95cm", "100cm", "105cm", "110cm"],
        colors: ["Black", "Brown", "Tan"],
        images: [
            "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
        ],
        stock: 40,
        featured: false,
        rating: 4.6,
        description: "Classic leather dress belt with a polished buckle. The finishing touch to any formal outfit."
    },
    {
        id: "bl002",
        name: "Reversible Leather Belt",
        category: "belts",
        gender: "men",
        brand: "Luxe Atelier",
        price: 408750,
        salePrice: null,
        sizes: ["85cm", "90cm", "95cm", "100cm", "105cm"],
        colors: ["Black/Brown", "Navy/Tan"],
        images: [
            "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
        ],
        stock: 35,
        featured: false,
        rating: 4.5,
        description: "Versatile reversible belt with two color options in one. Double the style."
    },
    {
        id: "bl003",
        name: "Chain Belt",
        category: "belts",
        gender: "women",
        brand: "Luxe Atelier",
        price: 483750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Gold", "Silver"],
        images: [
            "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
            "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
        ],
        stock: 25,
        featured: false,
        rating: 4.4,
        description: "Elegant chain belt with a lobster clasp closure. Perfect for cinching dresses and coats."
    },
    {
        id: "bl004",
        name: "Woven Leather Belt",
        category: "belts",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 296250,
        salePrice: null,
        sizes: ["85cm", "90cm", "95cm", "100cm", "105cm"],
        colors: ["Brown", "Tan", "Black"],
        images: [
            "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
        ],
        stock: 30,
        featured: false,
        rating: 4.5,
        description: "Hand-woven leather belt with a brass buckle. Artisanal craftsmanship."
    },

    // ========== SUNGLASSES (4) ==========
    {
        id: "sg001",
        name: "Aviator Sunglasses",
        category: "sunglasses",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 708750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Gold/Brown", "Silver/Grey", "Black/Black"],
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80"
        ],
        stock: 35,
        featured: true,
        rating: 4.8,
        description: "Classic aviator sunglasses with polarized lenses and metal frames. Timeless cool."
    },
    {
        id: "sg002",
        name: "Cat Eye Sunglasses",
        category: "sunglasses",
        gender: "women",
        brand: "Luxe Atelier",
        price: 633750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Tortoise", "Red"],
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80"
        ],
        stock: 30,
        featured: false,
        rating: 4.6,
        description: "Retro-inspired cat eye sunglasses with UV400 protection. Glamorous and chic."
    },
    {
        id: "sg003",
        name: "Wayfarer Sunglasses",
        category: "sunglasses",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 596250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Tortoise", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80"
        ],
        stock: 40,
        featured: false,
        rating: 4.7,
        description: "Iconic wayfarer sunglasses with acetate frames and gradient lenses. Universal style."
    },
    {
        id: "sg004",
        name: "Round Metal Sunglasses",
        category: "sunglasses",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 558750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Gold/Green", "Silver/Blue", "Black/Grey"],
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80"
        ],
        stock: 35,
        featured: false,
        rating: 4.5,
        description: "Vintage-inspired round sunglasses with metal frames and colored lenses. Artistic flair."
    },

    // ========== HATS (4) ==========
    {
        id: "ht001",
        name: "Fedora Hat",
        category: "hats",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 483750,
        salePrice: null,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Camel", "Navy", "Grey"],
        images: [
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
            "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=800&q=80",
            "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80"
        ],
        stock: 25,
        featured: true,
        rating: 4.7,
        description: "Classic wool fedora with a structured crown and grosgrain ribbon band. Sophisticated style."
    },
    {
        id: "ht002",
        name: "Wide Brim Sun Hat",
        category: "hats",
        gender: "women",
        brand: "Luxe Atelier",
        price: 333750,
        salePrice: null,
        sizes: ["S", "M", "L"],
        colors: ["Natural", "Black", "White"],
        images: [
            "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=800&q=80",
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
            "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80"
        ],
        stock: 30,
        featured: false,
        rating: 4.5,
        description: "Elegant wide brim sun hat in woven straw with a ribbon band. Sun protection with style."
    },
    {
        id: "ht003",
        name: "Beanie Hat",
        category: "hats",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 221250,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Grey", "Navy", "Camel", "Burgundy"],
        images: [
            "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80",
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
            "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=800&q=80"
        ],
        stock: 50,
        featured: false,
        rating: 4.6,
        description: "Soft cashmere beanie with a ribbed texture and folded cuff. Winter warmth."
    },
    {
        id: "ht004",
        name: "Baseball Cap",
        category: "hats",
        gender: "unisex",
        brand: "Luxe Atelier",
        price: 258750,
        salePrice: null,
        sizes: ["One Size"],
        colors: ["Black", "Navy", "White", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
            "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80",
            "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=800&q=80"
        ],
        stock: 45,
        featured: false,
        rating: 4.4,
        description: "Premium cotton twill baseball cap with an adjustable strap and embroidered logo. Casual luxury."
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTS_DATA };
}
