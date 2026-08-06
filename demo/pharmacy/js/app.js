/**
 * MediCare Pharmacy - Main Application
 * Initializes all modules, handles navigation, scroll effects, 
 * mobile menu, FAQ accordion, testimonials slider, forms, and more
 */

document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initNavigation();
    initScrollEffects();
    initBackToTop();
    initMobileMenu();
    initSearchOverlay();
    initFAQ();
    initTestimonials();
    initPrescriptionForm();
    initContactForm();
    initNewsletterForm();
    initPrescriptionUpload();
    initScrollAnimations();
    initMedicinesPage();
    initToast();
});

/* ============================================
   Page Loader
   ============================================ */
function initLoader() {
    const loader = document.getElementById("page-loader");
    if (!loader) return;

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 400);
    });

    // Fallback: hide loader after 3 seconds max
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 3000);
}

/* ============================================
   Navigation & Scroll Effects
   ============================================ */
function initNavigation() {
    const header = document.getElementById("main-header");
    const navLinks = document.querySelectorAll(".nav-link[data-section]");
    const sections = document.querySelectorAll("section[id]");

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Active section highlighting
    const observerOptions = {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle("active", link.dataset.section === id);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
}

/* ============================================
   Scroll Animations (Intersection Observer)
   ============================================ */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        ".category-card, .product-card, .why-us-card, .service-card, " +
        ".health-tip-card, .testimonial-card, .faq-item, .contact-card, " +
        ".prescription-step"
    );

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        animationObserver.observe(el);
    });
}

/* ============================================
   Back to Top Button
   ============================================ */
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    }, { passive: true });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ============================================
   Mobile Menu
   ============================================ */
function initMobileMenu() {
    const toggle = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!toggle || !navLinks) return;

    toggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        toggle.classList.toggle("active");
        toggle.setAttribute("aria-expanded", isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        });
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        }
    });
}

/* ============================================
   Search Overlay
   ============================================ */
function initSearchOverlay() {
    const searchBtn = document.getElementById("nav-search-btn");
    const searchOverlay = document.getElementById("search-overlay");
    const searchClose = document.getElementById("search-close");
    const searchInput = document.getElementById("search-input");

    if (!searchOverlay) return;

    const openSearch = () => {
        searchOverlay.classList.add("active");
        searchOverlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        setTimeout(() => searchInput?.focus(), 300);
    };

    const closeSearch = () => {
        searchOverlay.classList.remove("active");
        searchOverlay.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (searchInput) searchInput.value = "";
        const results = document.getElementById("search-results");
        if (results) results.innerHTML = "";
    };

    searchBtn?.addEventListener("click", openSearch);
    searchClose?.addEventListener("click", closeSearch);
    searchOverlay?.addEventListener("click", (e) => {
        if (e.target === searchOverlay) closeSearch();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
            closeSearch();
        }
        // Cmd/Ctrl + K to open search
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
            e.preventDefault();
            openSearch();
        }
    });
}

/* ============================================
   FAQ Accordion
   ============================================ */
function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question?.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");

            // Close all others
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove("open");
                    const otherQ = other.querySelector(".faq-question");
                    const otherA = other.querySelector(".faq-answer");
                    otherQ?.setAttribute("aria-expanded", "false");
                    otherA?.setAttribute("aria-hidden", "true");
                }
            });

            // Toggle current
            item.classList.toggle("open");
            question.setAttribute("aria-expanded", !isOpen);
            answer?.setAttribute("aria-hidden", isOpen);
        });
    });
}

/* ============================================
   Testimonials Slider
   ============================================ */
function initTestimonials() {
    const track = document.getElementById("testimonials-track");
    const dotsContainer = document.getElementById("testimonials-dots");
    const prevBtn = document.getElementById("testimonial-prev");
    const nextBtn = document.getElementById("testimonial-next");

    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll(".testimonial-card");
    const totalCards = cards.length;
    let currentIndex = 0;
    let autoPlayInterval;

    // Calculate cards per view based on screen width
    const getCardsPerView = () => {
        if (window.innerWidth <= 767) return 1;
        if (window.innerWidth <= 1023) return 2;
        return 3;
    };

    // Create dots
    const updateDots = () => {
        const cardsPerView = getCardsPerView();
        const totalDots = Math.max(1, totalCards - cardsPerView + 1);

        dotsContainer.innerHTML = "";
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement("button");
            dot.className = `testimonial-dot ${i === currentIndex ? "active" : ""}`;
            dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
            dot.setAttribute("role", "tab");
            dot.addEventListener("click", () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    };

    const goToSlide = (index) => {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        currentIndex = Math.max(0, Math.min(index, maxIndex));

        const cardWidth = cards[0]?.offsetWidth || 0;
        const gap = 24; // var(--space-6)
        const offset = currentIndex * (cardWidth + gap);

        track.style.transform = `translateX(-${offset}px)`;

        // Update dots
        dotsContainer.querySelectorAll(".testimonial-dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    };

    const nextSlide = () => {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        if (currentIndex < maxIndex) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    };

    prevBtn?.addEventListener("click", () => {
        prevSlide();
        resetAutoPlay();
    });

    nextBtn?.addEventListener("click", () => {
        nextSlide();
        resetAutoPlay();
    });

    // Auto-play
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(nextSlide, 5000);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
            resetAutoPlay();
        }
    }, { passive: true });

    // Handle resize
    window.addEventListener("resize", () => {
        currentIndex = 0;
        updateDots();
        goToSlide(0);
    });

    updateDots();
    startAutoPlay();
}

/* ============================================
   Prescription Form
   ============================================ */
function initPrescriptionForm() {
    const form = document.getElementById("prescription-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!validatePrescriptionForm()) return;

        const submitBtn = document.getElementById("prescription-submit");
        const submitText = submitBtn?.querySelector(".submit-text");
        const submitLoading = submitBtn?.querySelector(".submit-loading");

        // Show loading
        submitBtn?.setAttribute("disabled", "true");
        if (submitText) submitText.style.display = "none";
        if (submitLoading) submitLoading.style.display = "flex";

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show success
        window.showToast?.("Prescription submitted successfully! We will contact you shortly.", "success");
        form.reset();
        document.getElementById("upload-preview")?.style.setProperty("display", "none");
        document.getElementById("upload-content")?.style.setProperty("display", "flex");

        // Reset button
        submitBtn?.removeAttribute("disabled");
        if (submitText) submitText.style.display = "block";
        if (submitLoading) submitLoading.style.display = "none";
    });
}

function validatePrescriptionForm() {
    let isValid = true;

    const name = document.getElementById("prescription-name");
    const phone = document.getElementById("prescription-phone");
    const email = document.getElementById("prescription-email");
    const file = document.getElementById("prescription-file");

    // Name validation
    if (!name?.value.trim()) {
        showFieldError("prescription-name", "Please enter your full name");
        isValid = false;
    } else {
        clearFieldError("prescription-name");
    }

    // Phone validation
    const phoneRegex = /^[+]?[\d\s()-]{10,}$/;
    if (!phone?.value.trim()) {
        showFieldError("prescription-phone", "Please enter your phone number");
        isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
        showFieldError("prescription-phone", "Please enter a valid phone number");
        isValid = false;
    } else {
        clearFieldError("prescription-phone");
    }

    // Email validation (optional)
    if (email?.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showFieldError("prescription-email", "Please enter a valid email");
            isValid = false;
        } else {
            clearFieldError("prescription-email");
        }
    }

    // File validation
    if (!file?.files.length) {
        showFieldError("prescription-file", "Please upload your prescription");
        isValid = false;
    } else {
        clearFieldError("prescription-file");
    }

    return isValid;
}

/* ============================================
   Prescription Upload
   ============================================ */
function initPrescriptionUpload() {
    const uploadArea = document.getElementById("upload-area");
    const fileInput = document.getElementById("prescription-file");
    const uploadContent = document.getElementById("upload-content");
    const uploadPreview = document.getElementById("upload-preview");
    const previewImage = document.getElementById("upload-preview-image");
    const previewName = document.getElementById("upload-preview-name");
    const previewRemove = document.getElementById("upload-preview-remove");

    if (!uploadArea || !fileInput) return;

    // Click to upload
    uploadArea.addEventListener("click", (e) => {
        if (e.target !== previewRemove && !previewRemove?.contains(e.target)) {
            fileInput.click();
        }
    });

    uploadArea.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            fileInput.click();
        }
    });

    // File selection
    fileInput.addEventListener("change", handleFileSelect);

    // Drag and drop
    uploadArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadArea.classList.add("dragover");
    });

    uploadArea.addEventListener("dragleave", () => {
        uploadArea.classList.remove("dragover");
    });

    uploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadArea.classList.remove("dragover");

        const files = e.dataTransfer?.files;
        if (files?.length) {
            fileInput.files = files;
            handleFileSelect();
        }
    });

    function handleFileSelect() {
        const file = fileInput.files[0];
        if (!file) return;

        // Validate file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
            window.showToast?.("File too large. Maximum size is 10MB.", "error");
            fileInput.value = "";
            return;
        }

        // Show preview
        if (uploadContent) uploadContent.style.display = "none";
        if (uploadPreview) uploadPreview.style.display = "flex";
        if (previewName) previewName.textContent = file.name;

        // Show image preview for images
        if (file.type.startsWith("image/") && previewImage) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                previewImage.style.display = "block";
            };
            reader.readAsDataURL(file);
        } else if (previewImage) {
            previewImage.style.display = "none";
        }

        clearFieldError("prescription-file");
    }

    // Remove file
    previewRemove?.addEventListener("click", (e) => {
        e.stopPropagation();
        fileInput.value = "";
        if (uploadContent) uploadContent.style.display = "flex";
        if (uploadPreview) uploadPreview.style.display = "none";
        if (previewImage) previewImage.src = "";
    });
}

/* ============================================
   Contact Form
   ============================================ */
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!validateContactForm()) return;

        const submitBtn = document.getElementById("contact-submit");
        const submitText = submitBtn?.querySelector(".submit-text");
        const submitLoading = submitBtn?.querySelector(".submit-loading");

        submitBtn?.setAttribute("disabled", "true");
        if (submitText) submitText.style.display = "none";
        if (submitLoading) submitLoading.style.display = "flex";

        await new Promise(resolve => setTimeout(resolve, 1500));

        window.showToast?.("Message sent successfully! We will get back to you soon.", "success");
        form.reset();

        submitBtn?.removeAttribute("disabled");
        if (submitText) submitText.style.display = "block";
        if (submitLoading) submitLoading.style.display = "none";
    });
}

function validateContactForm() {
    let isValid = true;

    const name = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const message = document.getElementById("contact-message");

    if (!name?.value.trim()) {
        showFieldError("contact-name", "Please enter your name");
        isValid = false;
    } else {
        clearFieldError("contact-name");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email?.value.trim()) {
        showFieldError("contact-email", "Please enter your email");
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showFieldError("contact-email", "Please enter a valid email");
        isValid = false;
    } else {
        clearFieldError("contact-email");
    }

    if (!message?.value.trim()) {
        showFieldError("contact-message", "Please enter your message");
        isValid = false;
    } else {
        clearFieldError("contact-message");
    }

    return isValid;
}

/* ============================================
   Newsletter Form
   ============================================ */
function initNewsletterForm() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("newsletter-email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email?.value.trim() || !emailRegex.test(email.value)) {
            window.showToast?.("Please enter a valid email address", "error");
            email?.focus();
            return;
        }

        const submitBtn = document.getElementById("newsletter-submit");
        submitBtn?.setAttribute("disabled", "true");
        submitBtn.textContent = "Subscribing...";

        await new Promise(resolve => setTimeout(resolve, 1200));

        window.showToast?.("Thank you for subscribing! Check your inbox for confirmation.", "success");
        form.reset();

        submitBtn?.removeAttribute("disabled");
        submitBtn.textContent = "Subscribe";
    });
}

/* ============================================
   Form Helpers
   ============================================ */
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);

    field?.classList.add("error");
    if (errorEl) errorEl.textContent = message;
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);

    field?.classList.remove("error");
    if (errorEl) errorEl.textContent = "";
}

/* ============================================
   Toast Notification
   ============================================ */
function initToast() {
    window.showToast = (message, type = "success") => {
        const toast = document.getElementById("toast");
        const toastMessage = document.getElementById("toast-message");
        const toastIcon = document.getElementById("toast-icon");

        if (!toast || !toastMessage) return;

        toast.className = `toast ${type}`;
        toastMessage.textContent = message;

        if (toastIcon) {
            toastIcon.innerHTML = type === "success" 
                ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
                : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`;
        }

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3500);
    };
}

/* ============================================
   Medicines Page Initialization
   ============================================ */
function initMedicinesPage() {
    // Check if we're on the medicines page
    if (!document.getElementById("all-products-grid")) return;

    // Render sidebar categories
    window.productManager?.renderSidebarCategories();

    // Handle URL params
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search");
    const category = params.get("category");

    if (searchQuery) {
        window.productManager.searchQuery = searchQuery;
        window.productManager.currentPage = 1;
        window.productManager.renderProducts("all-products-grid", 1);

        // Update search input if exists
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.value = searchQuery;
    }

    if (category) {
        window.productManager.filterByCategory(category);
    }

    // Mobile filter toggle
    const filterToggle = document.getElementById("mobile-filter-toggle");
    const sidebar = document.getElementById("products-sidebar");
    const sidebarClose = document.getElementById("sidebar-close");

    if (filterToggle && sidebar) {
        // Create overlay if not exists
        let overlay = document.querySelector(".sidebar-overlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "sidebar-overlay";
            document.body.appendChild(overlay);
        }

        const openSidebar = () => {
            sidebar.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden";
        };

        const closeSidebar = () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
        };

        filterToggle.addEventListener("click", openSidebar);
        sidebarClose?.addEventListener("click", closeSidebar);
        overlay.addEventListener("click", closeSidebar);

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && sidebar.classList.contains("active")) {
                closeSidebar();
            }
        });
    }
}

/* ============================================
   Scroll Effects
   ============================================ */
function initScrollEffects() {
    // Parallax effect for hero floating cards
    const floatingCards = document.querySelectorAll(".hero-floating-card");

    if (floatingCards.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            floatingCards.forEach((card, index) => {
                const speed = 0.05 + (index * 0.02);
                card.style.transform = `translateY(${scrollY * speed}px)`;
            });
        }, { passive: true });
    }
}
