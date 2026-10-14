"use strict";

/* ==========================================================
   Well-Read - shared layout (rail + footer) and small UI bits.
   Loaded on every page, after data.js and before catalog.js.
   ========================================================== */

/* The one place to set the designer's name (shown in the footer and on About). */
const DESIGNER_NAME = "Your Name";

const NAV_LINKS = [
    { key: "home", href: "index.html", label: "Home" },
    { key: "books", href: "books.html", label: "Books" },
    { key: "about", href: "about.html", label: "About us" },
    { key: "contact", href: "contact.html", label: "Contact us" },
];

const LOGO = "Assets/Images/logo.svg";

/* Inline icons: no icon font or CDN needed. */
const ICON = {
    search: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    menu: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11h10.2L20 8H6.2"/><circle cx="9" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/></svg>',
};

/* Stable 0-5 number from a string, used to colour placeholder covers. */
function toneOf(text) {
    let h = 0;
    for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return h % 6;
}

/* ---------- <site-header>: the rail ---------- */

class SiteHeader extends HTMLElement {
    connectedCallback() {
        const current = document.body.dataset.nav;
        const query = new URLSearchParams(location.search).get("q") || "";
        const link = ({ key, href, label }) =>
            `<li><a href="${href}"${key === current ? ' aria-current="page"' : ""}>${label}</a></li>`;

        this.innerHTML = `
            <a class="skip-link" href="#main">Skip to content</a>
            <header class="rail on-dark" id="top">
                <a href="index.html" class="brand" aria-label="Well-Read home">
                    <img src="${LOGO}" alt="" width="34" height="34">
                    <span>Well-Read</span>
                </a>

                <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="railPanel">
                    <span class="menu-icon">${ICON.menu}</span><span class="menu-label">Menu</span>
                </button>

                <div class="rail-panel" id="railPanel">
                    <form class="search" role="search" action="search.html">
                        <input type="search" name="q" placeholder="Search books" aria-label="Search books and authors">
                        <button type="submit" aria-label="Search">${ICON.search}</button>
                    </form>

                    <nav class="rail-nav" aria-label="Main navigation">
                        <ul>${NAV_LINKS.map(link).join("")}</ul>
                    </nav>

                    <div class="rail-foot">
                        <a href="login.html" class="btn btn-mark btn-block"${current === "login" ? ' aria-current="page"' : ""}>Log in</a>
                        <p class="rail-note">A redesign of <a href="about.html#bookie">Bookie</a>, the original project by our university team.</p>
                    </div>
                </div>
            </header>`;

        this.querySelector(".search input").value = query;

        const panel = this.querySelector(".rail-panel");
        const toggle = this.querySelector(".menu-toggle");
        const icon = toggle.querySelector(".menu-icon");
        const label = toggle.querySelector(".menu-label");
        const setMenu = (open) => {
            panel.classList.toggle("open", open);
            toggle.setAttribute("aria-expanded", String(open));
            icon.innerHTML = open ? ICON.close : ICON.menu;
            label.textContent = open ? "Close" : "Menu";
            document.body.style.overflow = open ? "hidden" : "";
        };

        toggle.addEventListener("click", () => setMenu(!panel.classList.contains("open")));
        panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
        document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
        window.matchMedia("(min-width: 1024px)").addEventListener("change", () => setMenu(false));
    }
}

/* ---------- <site-footer> ---------- */

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-grid">
                    <div>
                        <a href="index.html" class="brand">
                            <img src="${LOGO}" alt="" width="34" height="34"><span>Well-Read</span>
                        </a>
                        <p class="footer-tag">Tranquility, Serenity &amp; Culture</p>
                    </div>
                    <div>
                        <ul class="footer-links">
                            <li><a href="about.html">About Well-Read</a></li>
                            <li><a href="index.html#feedback">Share your experience</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="help.html">Help</a></li>
                            <li><a href="index.html#popular">Popular</a></li>
                        </ul>
                        <ul class="socials">
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a></li>
                            <li><a href="https://twitter.com/" target="_blank" rel="noopener">X</a></li>
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a></li>
                            <li><a href="https://www.reddit.com/" target="_blank" rel="noopener">Reddit</a></li>
                        </ul>
                    </div>
                </div>
                <p class="footer-bottom">
                    &copy; ${new Date().getFullYear()} Well-Read. Redesigned and coded by ${DESIGNER_NAME}, from
                    <a href="about.html#bookie">Bookie</a>, the original website built with my university partners.
                </p>
            </footer>`;
    }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

/* ---------- Broken image -> readable placeholder ---------- */

document.addEventListener(
    "error",
    (e) => {
        const img = e.target;
        if (!(img instanceof HTMLImageElement) || !img.dataset.fallback) return;
        const box = document.createElement("div");
        box.className = `cover-fallback tone-${toneOf(img.dataset.fallback)}`;
        box.setAttribute("role", "img");
        box.setAttribute("aria-label", img.alt);
        box.textContent = img.dataset.fallback;
        img.replaceWith(box);
    },
    true
);

/* ---------- Toast ---------- */

function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        toast.setAttribute("role", "status");
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => toast.classList.add("show"));
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 3500);
}

document.addEventListener("DOMContentLoaded", () => {
    /* Designer name on the About page */
    document.querySelectorAll("[data-designer]").forEach((el) => (el.textContent = DESIGNER_NAME));

    /* ---------- Rating widget (home page) ---------- */
    const rateForm = document.getElementById("rateForm");
    if (rateForm) {
        const thanks = document.getElementById("rateThanks");
        const fields = document.getElementById("rateFields");
        const message = document.getElementById("rateMessage");
        const messages = {
            1: "I just hate it 😠",
            2: "I don't like it 😒",
            3: "It is awesome 😄",
            4: "I just like it 😎",
            5: "I just love it 😍",
        };

        rateForm.querySelectorAll("label").forEach((l) => (l.innerHTML = ICON.star));
        rateForm.addEventListener("change", (e) => {
            if (e.target.name !== "rate") return;
            message.textContent = messages[e.target.value];
            fields.hidden = false;
        });
        rateForm.addEventListener("submit", (e) => {
            e.preventDefault();
            rateForm.hidden = true;
            thanks.hidden = false;
        });
        document.getElementById("rateEdit").addEventListener("click", () => {
            thanks.hidden = true;
            rateForm.hidden = false;
        });
    }

    /* ---------- Contact form (demo: nothing is sent) ---------- */
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            contactForm.reset();
            showToast("Message received. This is a demo, so nothing was sent.");
        });
    }

    /* ---------- Log in / Create account (demo: no accounts) ---------- */
    const authForm = document.getElementById("authForm");
    if (authForm) {
        const password = authForm.querySelector("#password");
        const confirm = authForm.querySelector("#confirm");

        if (confirm) {
            const check = () =>
                confirm.setCustomValidity(confirm.value && confirm.value !== password.value ? "Passwords do not match" : "");
            password.addEventListener("input", check);
            confirm.addEventListener("input", check);
        }

        authForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Demo only: no account was created. Taking you home.");
            setTimeout(() => (location.href = "index.html"), 1400);
        });
    }
});
