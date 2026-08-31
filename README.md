# Alapati Vikas — React Portfolio

This is the corrected React + Vite portfolio for Alapati Vikas.

## What was fixed

- Replaced the old profile photo with the newly supplied profile image.
- Removed the unnecessary `@vitejs/plugin-react` dependency.
- Added a Vite configuration with a relative base so the built site works from static hosting/subfolders.
- Changed asset links to relative paths so the resume, certificates, project ZIP, and profile image resolve correctly after build.
- Kept the existing responsive design, navigation, projects, certifications, education, and contact sections.

## Run locally

Install Node.js 18+ and open this folder in a terminal:

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

**Important:** Do not open `index.html` directly by double-clicking it. React/Vite needs to run through the Vite development server or a static web server.

## Project structure

- `src/main.jsx` — portfolio content and React components
- `src/styles.css` — responsive styling
- `public/assets/images/vikas-photo.png` — updated profile photo
- `public/Alapati_Vikas_Resume.pdf` — resume
- `public/assets/certificates/` — certificates
- `public/assets/projects/NetworkIQ_Source.zip` — project files
