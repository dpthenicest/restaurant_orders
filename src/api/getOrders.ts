import { Orders } from "../types/orders.type";

export const getOrders = async (): Promise<Orders[]> => {
  try {
    const response = await fetch(`data/orders.json`); // Adjust path if needed
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array instead of a string
  }
};
