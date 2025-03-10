import { useState } from "react";
import Pagination from "./Pagination";
import { Orders } from "../types/orders.type";

interface OrderProps {
  orders: Orders[];
  setOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
}

const TableData = ({ orders, setOrders }: OrderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(orders.length / rowsPerPage);
  const paginatedOrders = orders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleComplete = (id: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Completed" } : order
      )
    );
  };

  return (
    <div>
      <div className="overflow-x-auto">
      <table className="w-full text-left bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="p-4">Order ID</th>
            <th className="p-4">Order Timestamp</th>
            <th className="p-4">Customer Name</th>
            <th className="p-4">Items Ordered</th>
            <th className="p-4">Total Price</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {paginatedOrders.map((order, index) => (
            <tr
              key={order.id}
              className={`text-gray-100 transition duration-200 ease-in-out ${
                index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              <td className="p-4">{order.id}</td>
              <td className="p-4">
                {new Date(order.timestamp).toLocaleString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4">{order.items.join(", ")}</td>
              <td className="p-4 font-semibold">${order.totalPrice.toFixed(2)}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-lg ${
                    order.status === "Pending"
                      ? "bg-yellow-500 text-gray-900"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-4">
                <button
                  onClick={() => handleComplete(order.id)}
                  disabled={order.status === "Completed"}
                  className={`px-4 py-2 text-sm font-semibold text-white rounded-xl transition ${
                    order.status === "Pending"
                      ? "bg-blue-500 hover:bg-blue-400"
                      : "bg-gray-500 cursor-not-allowed opacity-50"
                  }`}
                >
                  {order.status === "Pending" ? "Complete Order" : "Completed"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>


      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
};

export default TableData;