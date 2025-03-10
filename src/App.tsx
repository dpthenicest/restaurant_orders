import { useState, useEffect } from "react";
import rodarLogo from "./assets/rodar-logo.png";
import SearchOrder from "./components/SearchOrder";
import FilterOrder from "./components/FilterOrder";
import SortOrder from "./components/SortOrder";
import TableData from "./components/TableData";
import LazyLoading from "./components/LazyLoading";
import { Orders } from "./types/orders.type";
import { getOrders } from "./api/getOrders";
import RefreshTable from "./components/RefreshTable";

function App() {
  const [orders, setOrders] = useState<Orders[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Orders[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedOrders = await getOrders();
        setOrders(fetchedOrders);
        setFilteredOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Add a delay of 1 seconds before setting loading to false, to display lazy loading functionality
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 pb-10">
      {/* Header */}
      <div className="container sm:flex justify-between items-center text-center sm:text-end py-6">
        <img src={rodarLogo} alt="Rodar Logo" className="w-28 mx-auto sm:mx-0" />
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-white mt-2">
            Complete orders with no pressure...
          </h1>
          <p className="text-gray-300 md:text-lg">
            Rodar helps you organize and track your restaurant orders.
          </p>
        </div>
      </div>

      {/* Orders Section */}
      <div className="w-full mx-auto container mt-8 p-6 bg-white/20 backdrop-blur-lg sm:rounded-lg shadow-lg">
        {loading ? (
          <LazyLoading /> // Show LazyLoading component for 2 seconds
        ) : (
          <>
            <div className="sm:flex sm:justify-between sm:space-x-3 space-y-5 sm:space-y-0">
              <SearchOrder orders={orders} setFilteredOrders={setFilteredOrders} />
              <div className="flex justify-end space-x-3">
                <FilterOrder orders={orders} setFilteredOrders={setFilteredOrders} />
                <SortOrder orders={orders} setFilteredOrders={setFilteredOrders} />
                <RefreshTable setOrders={setOrders} setFilteredOrders={setFilteredOrders} setLoading={setLoading} />
              </div>
            </div>

            {/* Table Data */}
            <div className="mt-6">
              <TableData orders={filteredOrders} setOrders={setOrders} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
