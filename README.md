# 🚀 Ultra-Fast Asset Tracker

Welcome! This is a high-performance Stock Market Dashboard designed to handle massive datasets with surgical precision. The core challenge of this project was to fetch, process, and render over 10,000 records without a single frame drop, achieving a sub-second load time.

## ✨ Performance Highlights

- **The 1-Second Challenge :** Rendering 10k+ records in less than 1000ms.
- **Service Worker Offloading :** Heavy data processing is delegated to a Service Worker to keep the Main Thread buttery smooth and the UI responsive.
- **Smart Caching :** Powered by TanStack Query (React Query) for efficient state management and zero-latency re-fetches.
- **Windowing/Virtual Rendering :** Implementing virtualization to ensure the DOM only handles what’s visible, drastically reducing memory footprint.
- **Instant Client-side Filtering :** Search and filter through thousands of symbols with zero lag.

## 🛠 Tech Stack

- **Frontend:** React.js
- **State Management & Fetching:** React Query
- **Performance:** Service Workers (Worker Threads), Virtual Rendering
- **Backend:** Node.js (Express)

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Run the Backend (back-end)

The project includes a lightweight Node.js server to mock the asset services.

- cd back-end
- npm i
- node server.js

The API will be available at http://localhost:3000.

## Run the Frontend

In a new terminal tab, navigate to the root directory:

- [Node.js](https://nodejs.org/en) > 22
- npm i
- npm run dev

Open http://localhost:3000 (or the port shown in your terminal) and witness the speed!
