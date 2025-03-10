# Restaurant Order Management System Case Study

**Name:** Fortune Precious  
**Date:** 10th March, 2025  
**Web Application URL:** [Rodar](https://rodar.netlify.app)  
**GitHub Repository:** [GitHub Repo](https://github.com/dpthenicest/restaurant_orders)  

## Introduction/Overview

This case study outlines the development of a restaurant order management system designed to streamline order tracking and completion. The application was built to demonstrate proficiency in front-end development using **React, TypeScript, and Tailwind CSS**. The primary goal was to create a **responsive and user-friendly interface** for managing restaurant orders, including features for displaying, filtering, sorting, and updating order statuses.

The approach involved fetching mock order data, displaying it in a tabular format, and implementing interactive features to enhance usability. The technologies used include:
- **React** for building the UI components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Icons** for visual elements

## Functionality Demonstration

### 1. Displaying the Order List
- The application displays a table of restaurant orders, including **Order ID, Order Timestamp, Customer Name, Items Ordered, Total Price, and Status**.

### 2. Filtering and Sorting
- The interface includes a **search bar** for filtering orders by customer name or items.
- Dropdown menus for **filtering by status** and **sorting by date or price**.

### 3. Refreshing Data
- A **refresh button** resets the data to its default options and updates the display (if modifications were made to the JSON file).

### 4. Marking an Order as Completed
- A **"Complete Order"** button is provided for pending orders.
- Updates the order status to **"Completed"** and reflects the change in the UI in real-time.

### 5. Pagination
- The application implements **pagination** to efficiently handle large datasets.
- Users can navigate through pages of orders using **"Previous" and "Next"** buttons.
- This improves performance by **loading only the necessary data** for each page.

## Technical Implementation

### 🔹 **Data Fetching**
- Mock order data was fetched from a **JSON file** using the **fetch API**.
- Managed using the `useState` and `useEffect` hooks.

### 🔹 **Component Structure**
- The application follows a **modular component structure**:
  - Table Component
  - Pagination Component
  - Search Bar
  - Refresh Button
  - Filters and Sorting Options

### 🔹 **State Management**
- React's **useState** hook was used to manage:
  - Order data
  - Filtered orders
  - Sorting criteria

### 🔹 **Filtering and Sorting Logic**
- Implemented using JavaScript's **filter** and **sort** methods.
- Results dynamically reflected in the UI.

### 🔹 **Real-time Updates**
- When an order is marked **"Completed"**, the **state updates**, and the UI re-renders instantly.

### 🔹 **Styling**
- **Tailwind CSS** was used for a modern, **responsive, and visually appealing interface**.

### 🔹 **Icons**
- **React Icons** were used to enhance the **visual elements** of the interface.

### 🔹 **TypeScript**
- Used to ensure **type safety** and prevent runtime errors.

## Code Snippet (Example - Marking Order as Completed)

```typescript
const handleComplete = (id: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Completed" } : order
      )
    );
};
```

## Architecture and Data Flow

The application follows a simple architecture:
1. **Data Fetching:** Fetches mock order data from a JSON file.
2. **State Management:** Stores data using `useState`.
3. **Component Rendering:** Displays data in React components.
4. **User Interaction:** Filtering, sorting, marking orders as completed, and refreshing trigger state updates.
5. **UI Updates:** The UI re-renders based on the updated state.

## Folder Structure

```
Restaurant_Orders/
│── node_modules/               # Dependencies used by the application
│── public/
│   ├── data/
│   │   ├── data.json           # Contains the orders JSON
│── src/
│   ├── api/
│   │   ├── getOrders.ts        # Fetch API for getting orders data
│   ├── assets/                 # Images & SVGs
│   ├── components/             # React components
│   ├── types/
│   │   ├── orders.type.ts      # TypeScript type definitions
│   ├── App.tsx                 # Main component where all components are rendered
│── package.json                # Project metadata and dependencies
│── README.md                   # Project documentation
```

## Challenges and Solutions

### 🔸 **Challenge:** Implementing real-time updates without a full-page refresh.
**✅ Solution:** Used **React's state management** to efficiently update the order status and UI.

### 🔸 **Challenge:** Ensuring a responsive layout for different screen sizes.
**✅ Solution:** Utilized **Tailwind CSS's responsive utility classes** for a flexible layout.

## Future Improvements

- **Implement server-side data persistence** using a **database**.
- **Add user authentication** and authorization.
- **Enhance the UI** with more detailed order information and customer profiles.
- **Integrate with a real-time API** for live order updates.

## Conclusion

This case study demonstrates the successful development of a **restaurant order management system** using **React, TypeScript, and Tailwind CSS**. The application effectively manages order data, provides **interactive filtering and sorting**, and updates order statuses **in real-time**.

This project showcases my ability to **create responsive, user-friendly web applications**, and my interest in the position at **YIP**.

**I am eager to apply my skills and contribute to your team.**

🚀 **Thank you for considering my application!**

