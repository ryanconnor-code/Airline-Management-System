# Airline Management System

A web-based airline reservation management system built with **Bootstrap 5**, **Font Awesome 6**, and vanilla JavaScript (ES2020+). No build tools or backend required — open any HTML file directly in a browser.

## Features

- **User Portal** — Browse flights, book tickets, manage reservations, update account settings
- **Admin Portal** — Manage flights, approve/reject bookings, manage users and airbus fleet
- Responsive layout using Bootstrap 5 flexbox grid
- Accessible modals, accordions, and dropdown menus
- Dark sidebar navigation with collapsible sub-menus

## Project Structure

```
airline-management-system/
├── css/                      # Bootstrap 5 CSS (local)
├── js/                       # Bootstrap 5 JS bundle (local)
├── Pages/
│   ├── images/               # Hero / carousel images
│   ├── UserPOV/              # Passenger-facing pages
│   │   ├── index.html        # Landing page (login / signup)
│   │   ├── home.html         # User dashboard / profile
│   │   ├── newFlight.html    # Round-trip flight search
│   │   ├── oneWayFlight.html # One-way flight search
│   │   ├── flightResults.html
│   │   ├── userManageFlights.html
│   │   ├── accounts.html     # Password & payment settings
│   │   ├── payment.html
│   │   ├── newAirbus.html
│   │   ├── aboutUS.html
│   │   ├── contactus.html
│   │   ├── forgotPassword.html
│   │   ├── mycss.css         # Shared stylesheet
│   │   ├── myjs.js           # Shared vanilla JS
│   │   └── hideshow.js       # Round-trip return date toggle
│   └── AdminPOV/             # Admin-facing pages
│       ├── manager.html      # Flight approval dashboard
│       ├── manageflights.html
│       ├── user.html         # User management
│       ├── booking.html      # Step 1: flight selection
│       └── flights.html      # Step 2: passenger info
├── .gitignore
├── package.json
├── MODERNIZATION.md
└── README.md
```

## Getting Started

### Prerequisites

A modern browser (Chrome, Firefox, Edge, Safari). No server required for basic browsing.

For the live-server development experience:

```bash
npm install
npm start        # starts a local server at http://localhost:3000
```

Then open [http://localhost:3000/Pages/UserPOV/index.html](http://localhost:3000/Pages/UserPOV/index.html).

### Lint

```bash
npm run lint:html    # HTMLHint validation
npm run lint:css     # Stylelint CSS validation
```

## Technologies

| Technology | Version | Notes |
|---|---|---|
| Bootstrap | 5.3.x | Local bundle (no CDN dependency) |
| Font Awesome | 6.5.1 | CDN — icon library |
| Google Fonts (Poppins) | — | CDN |
| JavaScript | ES2020+ | Vanilla, no jQuery |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes (`git commit -m "feat: add my feature"`)
4. Push to the branch (`git push origin feat/my-feature`)
5. Open a Pull Request

## License

MIT
