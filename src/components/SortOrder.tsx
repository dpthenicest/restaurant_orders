import { Orders } from "../types/orders.type";
import { TbFilterDollar } from "react-icons/tb";
import SortByTime from "./SortByTime";

interface Props {
  orders: Orders[];
  setFilteredOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
}

const SortOrder = ({ orders, setFilteredOrders }: Props) => {
  const handleSort = (type: "date" | "price") => {
    const sortedOrders = [...orders].sort((a, b) => 
      type === "date" 
        ? new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime() 
        : a.totalPrice - b.totalPrice
    );
    setFilteredOrders(sortedOrders);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleSort("date")}
        className="p-2 bg-white text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white"
        title="Sort by Date"
      >
        <SortByTime className="w-7 h-7" />
      </button>
      <button
        onClick={() => handleSort("price")}
        className="p-2 bg-white text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white"
        title="Sort by Price"
      >
        <TbFilterDollar className="text-xl w-7" />
      </button>
    </div>
  );
};

export default SortOrder;
