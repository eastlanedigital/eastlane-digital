/* ============================================================
   EASTLANE DIGITAL
   Version 3.0 — Enhanced Edition
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initNavbar();
    initMobileMenu();
    initReveal();
    initCounters();
    initFaq();
    initSmoothScroll();
    initParallax();
    initDashboardAnimation();
    initFormValidation();
    initActiveNav();
    initBackToTop();
});

/* ============================================================
   LOADER
============================================================ */

function initLoader() {
    const loader = document.querySelector(".loader");
    if (!loader) return;

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 900);
    });
}

/* ============================================================
   NAVBAR SCROLL EFFECT
============================================================ */

function initNavbar() {
    const nav = document.querySelector(".navbar");
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 80) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
    });
}

/* ============================================================
   MOBILE MENU
============================================================ */

function initMobileMenu() {
    const toggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (!toggle || !navLinks) return;

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        navLinks.classList.toggle("active");
        document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
            toggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

/* ============================================================
   SCROLL REVEAL
============================================================ */

function initReveal() {
    const cards = document.querySelectorAll(".reveal, .stagger-children");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    cards.forEach(card => observer.observe(card));
}

/* ============================================================
   COUNTERS
============================================================ */

function initCounters() {
    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
                entry.target.classList.add("counted");
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counter) {
    const text = counter.innerText;
    const hasPlus = text.includes("+");
    const hasPercent = text.includes("%");
    const isText = isNaN(parseInt(text.replace(/[^0-9]/g, "")));

    if (isText) return; // Skip "Fast", "24/7", etc.

    const target = parseInt(text.replace(/[^0-9]/g, ""));
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        let display = Math.floor(current);
        if (hasPercent) display += "%";
        if (hasPlus) display += "+";
        counter.innerText = display;
    }, 16);
}

/* ============================================================
   FAQ
============================================================ */

function initFaq() {
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector(".icon");

        if (!question || !answer) return;

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            // Close all others
            document.querySelectorAll(".faq-item").forEach(otherItem => {
                const otherAnswer = otherItem.querySelector(".faq-answer");
                const otherIcon = otherItem.querySelector(".faq-question .icon");
                if (otherAnswer && otherAnswer !== answer) {
                    otherAnswer.style.display = "none";
                    otherItem.classList.remove("active");
                }
            });

            // Toggle current
            if (isOpen) {
                answer.style.display = "none";
                item.classList.remove("active");
            } else {
                answer.style.display = "block";
                item.classList.add("active");
            }
        });
    });
}

/* ============================================================
   SMOOTH SCROLL
============================================================ */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                const offset = 85;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

/* ============================================================
   PARALLAX
============================================================ */

function initParallax() {
    const hero = document.querySelector(".hero-right");
    if (!hero) return;

    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let ticking = false;

    document.addEventListener("mousemove", (e) => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                hero.style.transform = `translate(${x}px, ${y}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ============================================================
   GRAPH ANIMATION
============================================================ */

function initDashboardAnimation() {
    const bars = document.querySelectorAll(".graph-bars span");
    if (bars.length === 0) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars.forEach((bar, index) => {
                    const original = bar.style.height;
                    bar.style.height = "0px";
                    setTimeout(() => {
                        bar.style.transition = "height 0.8s ease";
                        bar.style.height = original;
                    }, index * 120);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const graphArea = document.querySelector(".graph-area");
    if (graphArea) observer.observe(graphArea);
}

/* ============================================================
   FORM VALIDATION
============================================================ */

function initFormValidation() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector("textarea");

        let isValid = true;

        // Simple validation
        if (name && !name.value.trim()) {
            showError(name, "Please enter your name");
            isValid = false;
        } else if (name) {
            clearError(name);
        }

        if (email && !email.value.trim()) {
            showError(email, "Please enter your email");
            isValid = false;
        } else if (email && !isValidEmail(email.value)) {
            showError(email, "Please enter a valid email");
            isValid = false;
        } else if (email) {
            clearError(email);
        }

        if (isValid) {
            // Show success message
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = "Message Sent! ✓";
            btn.style.background = "linear-gradient(135deg, #27c93f, #00E5FF)";

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "";
                form.reset();
            }, 3000);
        }
    });
}

function showError(input, message) {
    clearError(input);
    input.style.borderColor = "#ff5f56";
    const error = document.createElement("span");
    error.className = "error-message";
    error.style.cssText = "color: #ff5f56; font-size: 0.85rem; margin-top: -15px; display: block;";
    error.innerText = message;
    input.parentNode.insertBefore(error, input.nextSibling);
}

function clearError(input) {
    input.style.borderColor = "";
    const error = input.parentNode.querySelector(".error-message");
    if (error) error.remove();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ============================================================
   ACTIVE NAV LINK
============================================================ */

function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${entry.target.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: "-85px 0px 0px 0px"
    });

    sections.forEach(section => observer.observe(section));
}

/* ============================================================
   BACK TO TOP
============================================================ */

function initBackToTop() {
    const btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.innerHTML = "↑";
    btn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 25px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
        box-shadow: 0 10px 30px rgba(0, 229, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            btn.style.opacity = "1";
            btn.style.visibility = "visible";
        } else {
            btn.style.opacity = "0";
            btn.style.visibility = "hidden";
        }
    });
}

/* ============================================================
   LAZY LOADING IMAGES
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});
