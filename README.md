# AutoElite

AutoElite is a modern car dealership website built with React, TypeScript, Tailwind CSS, and Vite. It features a sleek, responsive design, smooth navigation, and user authentication modals for Sign In and Sign Up.

## Features

- Responsive navigation bar with smooth scrolling
- Hero, About, Inventory, and Contact sections
- Stylish Sign In and Sign Up modal forms
- Fixed navbar with blurred background
- Clean, modern UI using Tailwind CSS
- Built with React + TypeScript + Vite for fast development

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/components/Navbar.tsx` — Navigation bar with Sign In/Sign Up modals
- `src/components/Hero.tsx` — Hero section
- `src/components/About.tsx` — About section
- `src/components/Inventory.tsx` — Inventory section
- `src/components/Contact.tsx` — Contact form
- `src/components/Footer.tsx` — Footer
- `src/App.tsx` — Main app layout and routing
- `src/App.css` — Global and utility styles

## Customization

- Update the inventory, about, and contact sections in their respective files under `src/components/`.
- Tailwind CSS classes can be adjusted for your branding and style preferences.
- Authentication forms are UI only; connect them to your backend as needed.
