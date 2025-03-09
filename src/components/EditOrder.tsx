import { useState } from "react";
import { Orders } from "../types/orders.type";

interface EditOrderProps {
  order: Orders;
  setOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
  onClose: () => void;
}

const EditOrder = ({ order, setOrders, onClose }: EditOrderProps) => {
  const [formData, setFormData] = useState({
    customer: order.customer,
    items: order.items.join(", "),
    totalPrice: order.totalPrice.toString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setOrders((prevOrders) =>
      prevOrders.map((o) =>
        o.id === order.id
          ? {
              ...o,
              customer: formData.customer,
              items: formData.items.split(",").map((item) => item.trim()),
              totalPrice: parseFloat(formData.totalPrice),
            }
          : o
      )
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white backdrop-blur-lg p-6 rounded-lg shadow-xl w-96 text-black">
        <h2 className="text-lg font-bold mb-4">Edit Order</h2>
        
        {/* Order ID (Disabled) */}
        <label className="block text-sm font-semibold">Order ID:</label>
        <input
          type="text"
          value={order.id}
          disabled
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
        />

        {/* Customer */}
        <label className="block text-sm font-semibold mt-2">Customer Name:</label>
        <input
          type="text"
          name="customer"
          value={formData.customer}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Items */}
        <label className="block text-sm font-semibold mt-2">Items (comma-separated):</label>
        <textarea
          name="items"
          value={formData.items}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Total Price */}
        <label className="block text-sm font-semibold mt-2">Total Price:</label>
        <input
          type="number"
          name="totalPrice"
          value={formData.totalPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Status (Disabled) */}
        <label className="block text-sm font-semibold mt-2">Status:</label>
        <input
          type="text"
          value={order.status}
          disabled
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
        />

        {/* Buttons */}
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
