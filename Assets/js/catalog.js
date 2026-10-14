"use strict";

/* ==========================================================
   Well-Read - builds the book and author pages from data.js.
   Each page opts in with <body data-page="...">.
   ========================================================== */

const { novels, books, authors } = window.WELLREAD;

const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const initials = (name) =>
    name
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

const coverImg = (src, title) =>
    `<img src="${esc(src)}" alt="${esc(title)} cover" loading="lazy" referrerpolicy="no-referrer" data-fallback="${esc(title)}">`;

const novelHref = (novel) => `novel.html?id=${encodeURIComponent(novel.id)}`;

/* A cover with its title and summary underneath. Links when it has an href. */
function coverCard(book, href) {
    const tag = href ? "a" : "article";
    return `
        <${tag} class="cover-card"${href ? ` href="${href}"` : ""}>
            <div class="cover">${coverImg(book.cover, book.title)}</div>
            <h3>${esc(book.title)}</h3>
            <p>${esc(book.summary)}</p>
        </${tag}>`;
}

/* A reading-list row: small cover, title, summary, link. */
function listRow(novel) {
    const href = novelHref(novel);
    return `
        <article class="list-row">
            <a href="${href}" tabindex="-1" aria-hidden="true"><div class="cover">${coverImg(novel.cover, novel.title)}</div></a>
            <div>
                <h3><a href="${href}">${esc(novel.title)}</a></h3>
                <p>${esc(novel.summary)}</p>
            </div>
            <a class="link-more" href="${href}">View details</a>
        </article>`;
}

function authorRow(author) {
    return `
        <article class="author">
            <div class="author-photo">
                <img src="${esc(author.photo)}" alt="${esc(author.name)}" loading="lazy" referrerpolicy="no-referrer" data-fallback="${esc(initials(author.name))}">
            </div>
            <div>
                <h3>${esc(author.name)}</h3>
                <p>${esc(author.bio)}</p>
            </div>
        </article>`;
}

const matches = (query, ...fields) => {
    const q = query.trim().toLowerCase();
    return !q || fields.some((f) => f.toLowerCase().includes(q));
};

/* Render a list into a container, with an optional live filter box. */
function renderCatalog({ container, items, card, searchFields, input, noun }) {
    const draw = (query = "") => {
        const shown = items.filter((item) => matches(query, ...searchFields(item)));
        container.innerHTML = shown.length
            ? shown.map(card).join("")
            : `<p class="empty">No ${noun} match “${esc(query.trim())}”. Try a different title or word.</p>`;
    };
    draw();
    if (input) input.addEventListener("input", () => draw(input.value));
}

const byId = (id) => novels.find((n) => n.id === id);

/* Spine colours for the home page shelf. */
const SPINES = [
    { bg: "#f3f5f1", fg: "#0f1720" },
    { bg: "#0f1720", fg: "#f3f5f1" },
    { bg: "#f6c928", fg: "#0f1720" },
    { bg: "#1a2896", fg: "#f6c928" },
    { bg: "#c9d0ff", fg: "#0f1720" },
    { bg: "#8ea0ff", fg: "#0f1720" },
];

const pages = {
    /* ----- Home: spine shelf, latest list, most read ----- */
    home() {
        document.getElementById("spines").innerHTML = novels
            .slice(0, 10)
            .map((n, i) => {
                const c = SPINES[(i * 5 + 1) % SPINES.length];
                const height = Math.min(340, Math.max(230, n.title.length * 9 + 80) + (i % 3) * 14);
                const width = 46 + (n.title.length % 4) * 6;
                return `<a class="spine" href="${novelHref(n)}" style="--i:${i};--w:${width}px;--h:${height}px;--bg:${c.bg};--fg:${c.fg}">${esc(n.title)}</a>`;
            })
            .join("");

        const latest = ["the-little-prince", "red-dragon", "imaginary-friend"].map(byId);
        document.getElementById("latestList").innerHTML = latest.map(listRow).join("");

        const popular = [
            "murder-on-the-orient-express",
            "pride-and-prejudice",
            "and-then-there-were-none",
            "the-picture-of-dorian-gray",
            "death-on-the-nile",
            "the-abc-murders",
            "beloved",
            "the-hating-game",
        ].map(byId);
        const shelf = document.getElementById("shelf");
        shelf.innerHTML = popular
            .map(
                (n, i) => `
                <a class="shelf-item" href="${novelHref(n)}">
                    <span class="rank">${i + 1}</span>
                    <div class="cover">${coverImg(n.cover, n.title)}</div>
                    <h3>${esc(n.title)}</h3>
                </a>`
            )
            .join("");

        const step = () => shelf.clientWidth * 0.8;
        document.getElementById("shelfPrev").innerHTML = ICON.left;
        document.getElementById("shelfNext").innerHTML = ICON.right;
        document.getElementById("shelfPrev").addEventListener("click", () => shelf.scrollBy({ left: -step(), behavior: "smooth" }));
        document.getElementById("shelfNext").addEventListener("click", () => shelf.scrollBy({ left: step(), behavior: "smooth" }));
    },

    /* ----- Novels ----- */
    novels() {
        renderCatalog({
            container: document.getElementById("grid"),
            items: novels,
            card: (n) => coverCard(n, novelHref(n)),
            searchFields: (n) => [n.title, n.summary],
            input: document.getElementById("filter"),
            noun: "novels",
        });
    },

    /* ----- Books (science & history) ----- */
    library() {
        renderCatalog({
            container: document.getElementById("grid"),
            items: books,
            card: (b) => coverCard(b),
            searchFields: (b) => [b.title, b.summary],
            input: document.getElementById("filter"),
            noun: "books",
        });
    },

    /* ----- Authors ----- */
    authors() {
        renderCatalog({
            container: document.getElementById("grid"),
            items: authors,
            card: authorRow,
            searchFields: (a) => [a.name, a.bio],
            input: document.getElementById("filter"),
            noun: "authors",
        });
    },

    /* ----- One novel: novel.html?id=... ----- */
    novel() {
        const root = document.getElementById("detail");
        const index = novels.findIndex((n) => n.id === new URLSearchParams(location.search).get("id"));

        if (index < 0) {
            document.title = "Book not found · Well-Read";
            root.innerHTML = `
                <div class="soon">
                    <div>
                        <h1>Book not found</h1>
                        <p>We couldn't find that novel. The link may be wrong, or the book may have moved.</p>
                        <a class="btn" href="novels.html">Browse all novels</a>
                    </div>
                </div>`;
            return;
        }

        const novel = novels[index];
        document.title = `${novel.title} · Well-Read`;
        root.innerHTML = `
            <div class="detail">
                <div class="detail-cover"><div class="cover">${coverImg(novel.cover, novel.title)}</div></div>
                <div>
                    <a class="crumb" href="novels.html">${ICON.back}<span>All novels</span></a>
                    <h1>${esc(novel.title)}</h1>
                    <p class="summary">${esc(novel.summary)}</p>
                    <div class="detail-actions">
                        <a class="btn" href="${esc(novel.buy)}" target="_blank" rel="noopener">${ICON.cart}<span>Buy a copy</span></a>
                        <a class="btn btn-line" href="novels.html">Back to novels</a>
                    </div>
                </div>
            </div>`;

        const more = Array.from({ length: 4 }, (_, k) => novels[(index + 1 + k) % novels.length]);
        document.getElementById("moreGrid").innerHTML = more.map((n) => coverCard(n, novelHref(n))).join("");
    },

    /* ----- Search: search.html?q=... ----- */
    search() {
        const query = new URLSearchParams(location.search).get("q") || "";
        const out = document.getElementById("results");
        document.getElementById("searchTitle").textContent = query.trim() ? `Results for “${query.trim()}”` : "Search";
        document.title = `${query.trim() ? `${query.trim()} · ` : ""}Search · Well-Read`;

        const foundNovels = novels.filter((n) => matches(query, n.title, n.summary));
        const foundBooks = books.filter((b) => matches(query, b.title, b.summary));
        const foundAuthors = authors.filter((a) => matches(query, a.name, a.bio));

        if (!query.trim() || !(foundNovels.length || foundBooks.length || foundAuthors.length)) {
            out.innerHTML = `<p class="empty">${
                query.trim()
                    ? `Nothing matches “${esc(query.trim())}”. Try a title, a topic or an author's name.`
                    : "Type a title, a topic or an author's name in the search box."
            }</p>`;
            return;
        }

        const block = (title, cls, html) =>
            html
                ? `<div class="block-head"><h2>${title}</h2></div><div class="${cls}" style="margin-bottom:56px;margin-top:28px">${html}</div>`
                : "";

        out.innerHTML =
            block("Novels", "cards", foundNovels.map((n) => coverCard(n, novelHref(n))).join("")) +
            block("Books", "cards", foundBooks.map((b) => coverCard(b)).join("")) +
            block("Authors", "author-list", foundAuthors.map(authorRow).join(""));
    },
};

document.addEventListener("DOMContentLoaded", () => {
    const render = pages[document.body.dataset.page];
    if (render) render();
});
