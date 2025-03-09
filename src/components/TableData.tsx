import { useState } from "react";
import { Orders } from "../types/orders.type";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever, MdPending } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
import EditOrder from "./EditOrder";

interface Props {
  orders: Orders[];
  setOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
}

const TableData = ({ orders, setOrders }: Props) => {
  const [editingOrder, setEditingOrder] = useState<Orders | null>(null);

  const handleDelete = (id: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const handleComplete = (id: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Completed" } : order
      )
    );
  };

  const handlePending = (id: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Pending" } : order
      )
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-4">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="p-3">Order ID</th>
            <th className="p-3">Timestamp</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Items</th>
            <th className="p-3">Total Price</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="text-gray-100 transition duration-200 ease-in-out hover:bg-gray-700"
            >
              <td className="p-4">{order.id}</td>
              <td className="p-4">
                {new Date(order.timestamp).toLocaleString("en-US", {
                  weekday: "long", // Full day name (e.g., Monday)
                  year: "numeric", // Full year (e.g., 2024)
                  month: "long", // Full month name (e.g., March)
                  day: "numeric", // Day of the month (e.g., 7)
                  hour: "2-digit", // Hours (e.g., 02 or 14)
                  minute: "2-digit", // Minutes (e.g., 30)
                  second: "2-digit", // Seconds (e.g., 45)
                  hour12: true, // Use AM/PM format
                })}
              </td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4">{order.items.join(", ")}</td>
              <td className="p-4">${order.totalPrice.toFixed(2)}</td>
              <td
                className={`p-4 font-semibold ${order.status === "Pending" ? "text-yellow-400" : "text-green-400"
                  }`}
              >
                {order.status}
              </td>
              <td className="p-4 space-x-2">
                {/* Edit Button */}
                <button
                  onClick={() => setEditingOrder(order)}
                  className="px-3 py-1 text-xl text-white hover:text-blue-600 hover:scale-125 duration-150 ease-linear delay-100"
                >
                  <BiSolidEdit title="Edit Order" />
                </button>

                {/* Mark as Completed Button */}
                {order.status === "Pending" ? (
                  <button
                    onClick={() => handleComplete(order.id)}
                    className="px-3 pt-3 text-xl text-white hover:text-green-600 hover:scale-125 duration-150 ease-linear delay-100"
                  >
                    <ImCheckmark title="Mark Order as Completed" />
                  </button>
                ) : (
                  <button
                    onClick={() => handlePending(order.id)}
                    className="px-3 pt-3 text-xl text-white hover:text-yellow-400 hover:scale-125 duration-150 ease-linear delay-100"
                  >
                    <MdPending title="Mark Order as Pending" />
                  </button>
                )}

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(order.id)}
                  className="px-3 pt-3 text-xl text-white hover:text-red-600 hover:scale-125 duration-150 ease-linear delay-100"
                >
                  <MdDeleteForever title="Delete Order" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render EditOrder Popup if editingOrder is set */}
      {editingOrder && (
        <EditOrder
          order={editingOrder}
          setOrders={setOrders}
          onClose={() => setEditingOrder(null)}
        />
      )}
    </div>
  );
};

export default TableData;
