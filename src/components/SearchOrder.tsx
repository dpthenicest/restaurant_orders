import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  orders: Orders[];
  setFilteredOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
}

const SearchOrder = ({ orders, setFilteredOrders }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) {
      setFilteredOrders(orders); // Reset if query is empty
      return;
    }

    const filtered = orders.filter(
      (order) =>
        order.id.toLowerCase().includes(query.toLowerCase()) ||
        order.customer.toLowerCase().includes(query.toLowerCase()) ||
        order.items.some((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        )
    );

    setFilteredOrders(filtered);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const resetSearch = () => {
    setQuery("");
    setFilteredOrders(orders);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search Order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="w-64 p-2 rounded-lg bg-white/30 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="p-2.5 bg-gray-800 rounded-lg text-white hover:bg-gray-700 flex items-center justify-center"
      >
        <IoSearchOutline className="text-xl" />
      </button>
      {query && (
        <button
          onClick={resetSearch}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchOrder;
