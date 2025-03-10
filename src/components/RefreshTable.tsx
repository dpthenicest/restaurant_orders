import { RiRefreshLine } from "react-icons/ri";
import { Orders } from "../types/orders.type";
import { getOrders } from "../api/getOrders";

interface RefreshProps {
  setOrders: React.Dispatch<React.SetStateAction<Orders[]>>
  setFilteredOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function RefreshTable({ setOrders, setFilteredOrders, setLoading }: RefreshProps) {

  const refreshOrders = async () => {
    setLoading(true); // Show loading state
    try {
      const fetchedOrders = await getOrders();
      setOrders(fetchedOrders);
      setFilteredOrders(fetchedOrders);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={refreshOrders}
        className="p-2 bg-white text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white"
        title="Sort by Date"
      >
        <RiRefreshLine className="text-xl w-7" />
      </button>
    </div>
  )
}

export default RefreshTable