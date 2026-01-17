# DriveNow Car Rental Platform

## Project Overview

DriveNow is a modern car rental platform built with **Next.js 16** and a suite of powerful libraries and tools. It features a high-performance, responsive UI styled with **Tailwind CSS v4**, compliant with the latest design standards. The application offers smooth, engaging animations powered by **Framer Motion** and **GSAP**, ensuring a premium user experience. Robust authentication is handled by **NextAuth.js**, while the backend is powered by a custom **Express.js** server for managing car inventory and booking data.

## Key Features

- **Premium User Interface**: A visually stunning, responsive design with a focus on user experience, featuring dark/light aesthetics and seamless transitions.
- **Dynamic Car Listings**: Browse a curated selection of vehicles with detailed information, powered by server-side fetching for optimal performance.
- **Secure Authentication**: robust user login and registration system using NextAuth.js.
- **Booking System**: Intuitive booking flow allowing users to reserve their desired vehicles easily.
- **Interactive Elements**: Includes a Hero Carousel, featured car spotlights, and interactive testimonial sections.
- **Smooth Animations**: Enhanced visual storytelling with Framer Motion and GSAP animations.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

## Technologies & Dependencies

- **Framework**: Next.js 16.1.1 (React 19.2.3)
- **Styling**: Tailwind CSS 4.0 (with @tailwindcss/postcss)
- **Animations**: Framer Motion 12.26.1, GSAP 3.14.2
- **Backend**: Express.js 5.2.1
- **Authentication**: NextAuth.js 4.24.13
- **HTTP Client**: Axios 1.13.2
- **Icons**: Lucide React 0.562.0
- **Notifications**: React Hot Toast, SweetAlert2
- **Carousel**: Swiper 12.0.3
- **Utilities**: clsx, tailwind-merge

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd drivenow
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root directory and configure your environment variables (e.g., NextAuth secret, database URIs if applicable).

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This command uses `concurrently` to start both the Next.js frontend and the Express backend server.

## Usage

- Access the **Home Page** to view featured cars and promotional content.
- Navigate to the **Cars** section to explore the full fleet.
- Use the **Login** page to access personalized features.
- Select a car and proceed to **Book** it for your desired dates.

## Folder Structure

- `/src/app` - Next.js App Router pages and layouts.
- `/src/components` - Reusable UI components (Hero, CarCard, Navbar, etc.).
- `/src/lib` - Utility functions and shared libraries.
- `/server` - Express.js backend server code and API routes.
- `/public` - Static assets like images and icons.

## Contributions

| Name                | Role                | Contributions                       |
| ------------------- | ------------------- | ----------------------------------- |
| Tanvir Hussain Khan | Fullstack Developer | Entire project design & development |

## 📞 Contact

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-000?style=for-the-badge)](https://drivenow-chi.vercel.app/)
[![Email](https://img.shields.io/badge/📧_Email-tkdarkshadow@gmail.com-000?style=for-the-badge)](mailto:tkdarkshadow@gmail.com)
[![GitHub](https://img.shields.io/badge/💻_GitHub-tanvir81-000?style=for-the-badge)](https://github.com/tanvir81)
