# DriveNow

DriveNow is a premium car rental application built with **Next.js 16 (App Router)** and **Express.js**. Experience a seamless booking process with a high-fidelity design.

## Features

-   **Premium Landing Page**: 7+ sections showcasing the fleet, benefits, and testimonials.
-   **Authentication**: Secure login using NextAuth.js (Callbacks/Credentials).
    -   **Mock Credentials**: Email: `user@drivenow.com`, Password: `123456`
-   **Car Listing**: Browse available cars fetched dynamically from the backend.
-   **Car Details**: View comprehensive details including price, description, and features.
-   **Booking System**: Protected booking route allowing authenticated users to reserve cars.
-   **Backend API**: Express.js server serving mock data (`cars.json`, `bookings.json`).
-   **Proxy Integration**: Next.js Route Handler proxies API requests to the Express backend.

## Technologies Used

-   **Frontend**: Next.js 16 (App Router), React, Tailwind CSS
-   **Backend**: Express.js, Node.js
-   **Auth**: NextAuth.js
-   **Tools**: Concurrently (to run both servers)

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run the Application**:
    Start both the Next.js frontend and Express backend with a single command:
    ```bash
    npm run dev
    ```
    -   Frontend: [http://localhost:3000](http://localhost:3000)
    -   Backend: [http://localhost:4000](http://localhost:4000)

## Project Structure

-   `app/`: Next.js App Router pages and API routes.
-   `components/`: Reusable UI components (Navbar, CarCard, etc.).
-   `lib/`: Utilities for API and Auth.
-   `server/`: Express.js backend code.
    -   `routes/`: API route handlers.
    -   `data/`: JSON files for mock database.

## Routes

-   `/` - Landing Page (Public)
-   `/cars` - Car Listing (Public)
-   `/cars/[id]` - Car Details (Public)
-   `/login` - Login Page (Public)
-   `/cars/book` - Booking Page (Protected)

Enjoy your drive with **DriveNow**!
