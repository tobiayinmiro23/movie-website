# movie-website

A movie website built with react, vite, tailwind, typescript,  and TMDB API.

## 🚀 Features

- responsive UI
- loader
- view all movies functionality
- view individual movie functionality
- search movie functionality
- multiple movie categorie (LatestMovie, LatestTvShows, Sci-fi, Comedy, Action etc)
- integration with news TMDB API
- load more news functionality (pagination)
- error handling


## 📋 Prerequisites

- Node.js >= 18
- npm or yarn


## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tobiayinmiro23/movie-website.git
   ```

2. **Enter the directory**
   ```bash
   cd movie-website
   ```
   
3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```

├── dist/                  # The npm build
├── public/               
│   └── image/             # Stores images accessible as static assets
├── src/                   # Main source code
│   ├── assets/              # static files
│   ├── components/          # Reusable UI components
│   ├── components/ui/       # Reusable shadcn UI components
│   ├── context/             # For global state management
│   ├── data/                # For textual data
│   ├── fetch/               # contains all the fetch requests made to different endpoints
│   ├── lib/                 # shadcn helper for safely handling Tailwind CSS classes and preventing conflicts.
│   ├── pages/                # Application screens
│   ├── types/               # Contains all the types used
│   ├── AllFiles.jsx         # Centralized imports and exports for easy access to all components and pages from a single file
└── README.md               # Project documentation

```


## 📦 Dependencies

- **tailwind css**:  *for styling html elements*  
- **react-router-dom**:  *for navigating*  
 - **axios**:  *for handling http requests*
- **shadcn**: *provides prebuilt UI components and patterns built on Radix UI and Tailwind CSS*
- **class-variance-authority**: *for creating reusable, variant-based component styles (cva) in Tailwind CSS*
- **clsx**: *for conditionally combining CSS class names into a single string*
- **tailwind-merge**: *for merging Tailwind CSS class names and resolving conflicts*
- **lucide-react**: *for using a library of React-ready icons in components*
- **@radix-ui/react-dropdown-menu"**: *for creating drop down menus in React applications*
