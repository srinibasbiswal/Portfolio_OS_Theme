# Portfolio OS Theme

An interactive portfolio website that simulates operating system experiences.

You can launch into:
- Windows 10 style desktop
- macOS style desktop

## Highlights

- OS selection screen with quick theme toggle (dark/light)
- Global dark/light mode persisted in local storage
- Auto-open `About Me` window on launch (both Windows and macOS)
- Windows Start `Power` menu includes `Switch OS`
- Windowed app system (open, minimize, maximize, close)
- Desktop wallpaper switching
- Mobile-responsive behavior for both themes
- macOS startup/sleep/lock/shutdown system screens

## Tech Stack

- React 18
- Redux
- React Router
- SCSS
- Fluent UI
- UIKit

## Getting Started

### Prerequisites

- Node.js
- npm

### Install and Run

```bash
git clone https://github.com/srinibasbiswal/Portfolio_OS_Theme.git
cd Portfolio_OS_Theme
npm install
npm start
```

### Production Build

```bash
npm run build
```

## Configuration

### 1. Personal Details

Update user content in:
- `src/utils/data/user.config.js`

### 2. Apps and App Layout

Configure app metadata in:
- `src/utils/data/apps.config.js`

### 3. Wallpapers

Configure available wallpapers in:
- `src/utils/data/settings.config.js`

### 4. Analytics Toggle

Enable/disable analytics in:
- `src/utils/data/project.config.js`

### 5. Environment Variables

Create a `.env` file in project root.

Firebase (only needed if analytics is enabled):

```env
REACT_APP_APIKEY=firebase_apikey
REACT_APP_AUTH_DOMAIN=firebase_auth_domain
REACT_APP_DATABASE_URL=firebase_database_url
REACT_APP_PROJECT_ID=firebase_project_id
REACT_APP_STORAGE_BUCKET=firebase_storage_bucket
REACT_APP_MESSSAGING_SENDER_ID=firebase_messaging_sender_id
REACT_APP_APP_ID=firebase_app_id
REACT_APP_MEASUREMENT_ID=firebase_measurement_id
```

EmailJS:

```env
REACT_APP_EMAILJS_KEY=email_js_key
```

## Scripts

- `npm start` - Run in development mode
- `npm run build` - Create production build
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/your-change`)
3. Commit your changes
4. Push and open a pull request

## License

MIT
