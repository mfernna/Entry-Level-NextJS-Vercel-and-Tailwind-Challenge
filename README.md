# Streaver Frontend Challenge - Post Explorer

A performance-focused Post Explorer built with **Next.js**, **SWR**, and **Tailwind CSS**. This app allows users to search and filter posts from the JSONPlaceholder API with a seamless, responsive, and mobile-friendly interface.

## [🚀 Live Demo](https://entry-level-next-js-vercel-and-tail.vercel.app/posts)

## ✨ Features

- **Real-time Search & Filter** - Search posts by title with debouncing
- **User Filtering** - Filter posts by user ID
- **Smart Caching** - SWR handles data fetching with automatic revalidation
- **Loading States** - Beautiful skeleton loaders while data loads
- **Mobile Responsive** - Fully optimized for desktop and mobile devices
- **Error Handling** - User-friendly error messages and slow connection warnings
- **Performance Optimized** - Lazy loading and efficient rendering

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Data Fetching:** SWR + Axios (caching & revalidation)
- **Styling:** Tailwind CSS 4
- **Testing:** Jest + React Testing Library
- **UI Feedback:** Sonner (Toasts)
- **API:** JSONPlaceholder (mock posts data)

## ⚙️ Installation & Setup

1. **Clone & Install:**

   ```bash
   git clone https://github.com/mfernna/Entry-Level-NextJS-Vercel-and-Tailwind-Challenge.git
   cd Entry-Level-NextJS-Vercel-and-Tailwind-Challenge
   npm install
   ```

2. **Run Development Server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/              # Next.js app router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── posts/        # Posts page
├── api/              # API utilities
│   ├── axios.ts      # Axios instance config
│   └── post.ts       # Post fetching functions
├── components/       # Reusable React components
│   ├── Navbar.tsx    # Search and filter navbar
│   ├── PostCard.tsx  # Individual post card
│   ├── PostSection.tsx # Posts grid container
│   └── Skeleton.tsx   # Loading skeleton
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
│   └── post.ts       # Post type definition
└── utils/            # Helper functions
    └── params.ts     # Query parameter utilities
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

## 📝 How It Works

1. **Navbar Component** - Users can enter a User ID to filter posts or search by title
2. **Post Fetching** - SWR fetches posts from JSONPlaceholder API with caching
3. **Filtering** - Posts are filtered based on user ID (query param) and search query
4. **Display** - Posts are rendered in a responsive grid with skeleton loaders
5. **Feedback** - Toast notifications alert users about slow connections

## 🔗 API Reference

- **Fetch Posts:** `GET /api/posts` or `GET /api/posts?userId={id}`
- **Data Source:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)

## 📦 Dependencies

- `next` - React framework
- `swr` - Data fetching library
- `axios` - HTTP client
- `tailwindcss` - Utility-first CSS
- `sonner` - Toast notifications
- `jest` & `@testing-library/react` - Testing

## 🎯 Performance Optimizations

- Server-side rendering for better SEO
- SWR caching strategy with revalidation
- Debounced search input (500ms)
- Skeleton loading states
- Lazy component loading
- Responsive image handling

## 📄 License

This project is private and part of the Streaver Frontend Challenge.
