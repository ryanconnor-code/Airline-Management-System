# Modernization Guide

This document describes the changes made during the June 2026 modernization of the Airline Management System.

## Summary of Changes

### Phase 1 — Dependencies

| Before | After | Reason |
|---|---|---|
| Bootstrap **3.3.7** (CDN) | Bootstrap **5.3.x** (local bundle) | BS3 is EOL; BS5 brings Flexbox, modern JS API, no jQuery requirement |
| jQuery **3.2.1** (CDN) | **Removed** | Bootstrap 5 no longer requires jQuery; vanilla JS is smaller and faster |
| Font Awesome **4.7.0** | Font Awesome **6.5.1** | FA4 icons deprecated; FA6 has `fas`/`fab`/`far` prefixes and better a11y |
| Google Fonts over **HTTP** | Google Fonts over **HTTPS** | Security — mixed-content blocked in modern browsers |

Bootstrap 5 files were already bundled in `/css/` and `/js/` — they were simply unused. All pages now reference those local files, eliminating CDN dependency for core layout.

---

### Phase 2 — HTML Fixes

| Issue | Fix |
|---|---|
| `<script>` tags placed **after** `</html>` | Moved inside `<body>` before `</body>` |
| Stray `s` character at end of some files | Removed |
| `form="post"` attribute (invalid) | Changed to `method="post"` |
| `type="address"` and `type="0000-0000"` (invalid) | Changed to `type="text"` with appropriate pattern/maxlength |
| Unclosed `</div>` tags in navbars | Fixed — proper nesting throughout |
| Missing `lang` attribute on `<html>` | Added `lang="en"` to all pages |
| Hardcoded past dates (`min="2017-01-01"`, `max="2022-05-14"`) | Removed expired constraints |
| Double logout buttons in authenticated pages | Consolidated to a single logout link |

---

### Phase 3 — Bootstrap 3 → Bootstrap 5 Migration

| Bootstrap 3 | Bootstrap 5 | Notes |
|---|---|---|
| `navbar-inverse` | `navbar-dark bg-dark` | Color scheme utility classes |
| `navbar-header` wrapper | Removed | Not needed in BS5 |
| `navbar-toggle` | `navbar-toggler` | Hamburger button |
| `navbar-right` | `ms-auto` on `ul.navbar-nav` | Flexbox margin utility |
| `data-toggle` | `data-bs-toggle` | BS5 uses `data-bs-*` prefix throughout |
| `data-target` | `data-bs-target` | Same |
| `data-dismiss` | `data-bs-dismiss` | Same |
| `data-ride="carousel"` | `data-bs-ride="carousel"` | Same |
| `data-slide-to` | `data-bs-slide-to` | Same |
| `.item` (carousel) | `.carousel-item` | Class renamed in BS4+ |
| `<ol><li>` (carousel indicators) | `<div><button>` | Semantic improvement |
| `.panel` / `.panel-heading` / `.panel-body` | `.card` / `.card-header` / `.card-body` | Panels replaced by Cards in BS4+ |
| `.panel-transparent` | `.card-transparent` | Custom class updated |
| `.form-group` | `.mb-3` | Form spacing utility |
| `data-toggle="collapse" href="#id"` | `data-bs-toggle="collapse" data-bs-target="#id"` | Attribute syntax |
| `data-spy="affix"` | `position: sticky` / `sticky-top` | Affix plugin removed in BS4 |
| `.col-sm-offset-N` | `.offset-sm-N` | Grid offset class renamed |
| `.btn-block` | `.w-100` | Block button changed to width utility |
| Pagination `<li class="active">` | `<li class="page-item active">` | Pagination markup updated |
| `.glyphicon-*` | Font Awesome 6 icons (`fas fa-*`) | Glyphicons removed from BS3+ |
| Modal close: `<button class="close">` | `<button class="btn-close">` | Accessible close button |
| Dropdown: `data-toggle="dropdown"` | `data-bs-toggle="dropdown"` | Same prefix migration |
| `nav-stacked` | `flex-column` on `ul.nav` | Nav stacking via flexbox |

---

### Phase 4 — JavaScript

**myjs.js** (`Pages/UserPOV/myjs.js`)
- Removed jQuery dependency
- Rewrote sidebar toggle using vanilla `document.getElementById` + `style.display` toggling
- Changed inline `onclick` attributes to declarative `data-sub` attribute pattern
- Added `'use strict'` directive

**hideshow.js** (`Pages/UserPOV/hideshow.js`)
- Fixed critical bug: `display: 'visible'` and `display: 'hidden'` are invalid CSS values
- Corrected to `display: 'block'` and `display: 'none'`
- Wrapped initialization in `DOMContentLoaded` listener
- Added null-guard for `#box` element

---

### Phase 5 — CSS (`Pages/UserPOV/mycss.css`)

- Added `.card-transparent` and its child rules (`card-header`, `card-body`) to replace removed `.panel-transparent` BS3 styles
- Added `.sidebar`, `.sidebar .nav-link`, `.sub-nav` styles for the new flexbox sidebar layout
- Added `.main-content` class for the right-hand content pane
- Added `.trans-input-area::placeholder` and `.trans-input-area option` for consistent dark-theme form UX
- Cleaned up stray semicolons (`;` after `}` in list-group rules)

---

### Phase 6 — Security

- Removed `http://` Google Fonts URL → `https://`
- All external links (`target="_blank"`) now go to stable domains (removed personal Google account signout URL)
- Card number input type changed from `type="0000-0000"` to `type="text"` with `pattern` and `maxlength` attributes for proper client-side validation

---

### Phase 7 — CI/CD

Added `.github/workflows/ci.yml`:
- Runs on every push and pull request to `main`
- Installs HTMLHint and Stylelint
- Lints all HTML pages in `Pages/**/*.html`
- Lints all CSS files in `Pages/**/*.css`

---

## Breaking Changes for Developers

1. **No jQuery** — all DOM manipulation uses the native Web API. If you add new scripts that rely on `$`, either include jQuery separately or rewrite to vanilla JS.
2. **Bootstrap 5 data attributes** — all `data-toggle`, `data-target`, `data-dismiss` must use the `data-bs-*` prefix.
3. **Sidebar menus** use `data-sub="subN"` attributes on `<a>` tags instead of inline `onclick`. The `navbarToggle(id)` function in `myjs.js` handles toggling.
4. **Admin pages** reference shared assets via relative paths: `../UserPOV/mycss.css` and `../UserPOV/myjs.js`.

## Migration Steps for New Pages

1. Copy head template from any existing modernized page
2. Use `../../css/bootstrap.min.css` for Bootstrap CSS
3. Use `../../js/bootstrap.bundle.min.js` for Bootstrap JS (at end of `<body>`)
4. Use Font Awesome 6 CDN for icons (`fas`, `fab`, `far` prefixes)
5. Replace all `data-toggle/target/dismiss` with `data-bs-toggle/target/dismiss`
6. Use `.card` / `.card-header` / `.card-body` instead of `.panel` variants
7. Add `lang="en"` to the `<html>` element
8. Place all `<script>` tags before `</body>`, never after `</html>`
