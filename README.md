# Service POS System

Welcome to Service Point of Sale (POS) System! This project is a responsive, functional, and intuitive frontend for selling services.

## Features

- Select from a list of available services
- Add services to cart and manage cart details
- Optional customer information collection during checkout
- Simulated checkout and payment flow
- Receipt generation upon successful checkout
- Responsive design for both web and mobile devices
- Local storage integration for cart persistence

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Lalit9025/POS.git
   cd service-pos-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

5. You can also access the deployed version of the application here: [https://pos-beta-eight.vercel.app/](https://pos-beta-eight.vercel.app/).

## Tech Stack

- React
- Material-UI
- React Router
- Local Storage for cart persistence

## Project Structure

The main components of the project are:

- `App.js`: Main component with routing and state management
- `ServiceList.js`: Displays available services
- `Cart.js`: Manages the shopping cart
- `Checkout.js`: Handles the checkout process
- `Receipt.js`: Displays the receipt after purchase

## Assumptions and Limitations

- This is a frontend-only application
- The list of services is hardcoded
- Payment processing is simulated
- Local storage is used for cart persistence, which has capacity and security limitations

