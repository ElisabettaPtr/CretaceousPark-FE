![React](https://img.shields.io/badge/React--61DAFB.svg?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript--blue.svg?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite--purple.svg?logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS--06B6D4.svg?logo=tailwindcss&logoColor=white) ![DaisyUI](https://img.shields.io/badge/DaisyUI-Component%20Library-purple.svg?logo=daisyui&logoColor=white) ![Leaflet](https://img.shields.io/badge/Leaflet-Map-green.svg?logo=leaflet&logoColor=white) ![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)

# Cretaceous Park Frontend

This is the frontend of **Cretaceous Park**, a React-based web application for exploring and managing a dinosaur-themed amusement park. It integrates with the Spring Boot backend via REST APIs.

## 🌐 Technologies

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* Leaflet (for interactive map)

## 📦 Project Structure

The code is organized into:

* `components`: Reusable UI components (e.g., attraction cards, navbar, etc.)
* `pages`: Route-specific views (e.g., login, dashboard, attraction detail)
* `services`: API calls using native `fetch`

## 🔧 Setup Instructions

### Prerequisites

* Node.js (v18 or later)
* npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

## 🧭 Features

* 🔐 **Authentication**

  * Login and Signup
  * Auth state managed via JWT tokens stored client-side
* 🗺️ **Dashboard**

  * Interactive map of park zones and attractions using Leaflet
* 📍 **Attractions & Zones**

  * Browse all zones and attractions
  * View detailed info on each attraction
* 👤 **User Management**

  * Add personal customer info after signup

## 🔁 Backend Integration

* REST API calls are made with `fetch`
* Auth tokens are included in headers where required

## 🚫 Environment Variables

Currently, no `.env` variables are required.

## 📌 To-Do / Planned Features

* Full planner view with booking options
* Booking management dashboard
* Responsive UI improvements
* Environment-based configuration
