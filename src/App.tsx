import { useState, useEffect } from "react";
import rodarLogo from "./assets/rodar-logo.png";
import SearchOrder from "./components/SearchOrder";
import AddOrder from "./components/AddOrder";
import FilterOrder from "./components/FilterOrder";
import SortOrder from "./components/SortOrder";
import TableData from "./components/TableData";
import { Orders } from "./types/orders.type";

function App() {
  const [orders, setOrders] = useState<Orders[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Orders[]>(orders);
  const [loading, setLoading] = useState(true); // Add loading state

  console.log(orders);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`public/data/data.json`); // Adjust path if needed
        const data: Orders[] = await response.json();
        setOrders(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Display loading indicator
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6">
      {/* Header */}
      <div className="container flex justify-between items-center text-end">
        <img src={rodarLogo} alt="Rodar Logo" className="w-28" />
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-white mt-2">
            Make quick orders with no pressure...
          </h1>
          <p className="text-gray-300 md:text-lg">
            Rodar helps you organize and track your restaurant orders.
          </p>
        </div>
      </div>

      {/* Orders Section */}
      <div className="w-full mx-auto container mt-8 p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="flex justify-between space-x-3">
          <SearchOrder orders={orders} setFilteredOrders={setFilteredOrders} />
          <div className="flex justify-end space-x-3">
            <AddOrder setOrders={setOrders} />
            <FilterOrder orders={orders} setFilteredOrders={setFilteredOrders} />
            <SortOrder orders={orders} setOrders={setOrders} />
          </div>
        </div>


        {/* Table Data */}
        <div className="mt-6">
          <TableData orders={filteredOrders} setOrders={setOrders} />
        </div>
      </div>
    </div>
  );
}

export default App;
