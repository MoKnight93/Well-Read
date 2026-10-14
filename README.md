# Well-Read

> **Frontend only — Demo project.**
> This is a static front-end demo. There is no backend, database, or server-side logic.

Well-Read is a bookstore website: *Tranquility, Serenity & Culture*.

## Credits and respect to Bookie

Well-Read is a **redesign of Bookie**, a website built by a university team. The books, the writing and the original idea come from Bookie. The name, colours, layout and code of Well-Read are new.

- **Current design and code:** set in `Assets/js/main.js` (`Mohamed Samir`)
- **Original Bookie team:** Eman, Ismail, Badr, Bishoy, Mostafa, M.Nasr, Fady, John, Moemen and Kero (see the About page for what each of them built)

All respect to the original Bookie project and everyone who made it.

## Pages

| Page | File |
|------|------|
| Home (shelf of spines, latest books, most read, rate us) | `index.html` |
| Books hub | `books.html` |
| Novels / Science & history / Authors lists (with live filter) | `novels.html`, `library.html`, `authors.html` |
| Novel details | `novel.html?id=...` |
| Search (rail search box) | `search.html?q=...` |
| About, Contact | `about.html`, `contact.html` |
| Log in, Create account | `login.html`, `signup.html` |
| Help (coming soon) | `help.html` |

## What is NOT included (demo limitations)

- No real login or accounts. The forms only check the fields and send you home
- The contact form and the rating do **not** send or save anything
- Content is a plain JavaScript file (`Assets/js/data.js`), not a database
- The Help page is a "coming soon" placeholder

## Project structure

```
Well-Read/
├── *.html
├── README.md
└── Assets/
    ├── css/style.css      (one stylesheet for the whole site)
    ├── js/
    │   ├── data.js        (novels, books, authors)
    │   ├── main.js        (rail, footer, forms, rating, designer name)
    │   └── catalog.js     (builds the book and author pages)
    └── Images/
        ├── logo.svg
        ├── backgrounds/   (contact, auth)
        ├── sections/      (Novels / Books / Authors panels)
        └── covers/        (local book covers)
```

## Design

- **Idea:** the site is a book. The left rail is its spine, ultramarine is the cloth cover, yellow is the highlighter.
- **Colour:** chalk `#F3F5F1`, ink `#0F1720`, ultramarine `#2A3FE0`, highlighter yellow `#F6C928`
- **Type:** Literata (serif, for headings and reading text) and Hanken Grotesk (interface)
- No frameworks, no icon fonts: icons are inline SVG.

## Editing content

Add or change a novel, book or author in `Assets/js/data.js` and every page updates.
The rail and footer live in `Assets/js/main.js`, so they are edited once for all pages.

## Run it

No build step. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

Internet is needed for the Google Fonts. Most book covers and author photos are external URLs copied from the original project; if one breaks, a coloured text placeholder is shown. For a real site, download them into `Assets/Images/` and update `data.js`.
