import { Orders } from "../types/orders.type";

interface Props {
  orders: Orders[];
  setOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
}

const SortOrder = ({ orders, setOrders }: Props) => {
  const handleSort = (type: "date" | "price") => {
    const sortedOrders = [...orders].sort((a, b) => 
      type === "date" 
        ? new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime() 
        : a.totalPrice - b.totalPrice
    );
    setOrders(sortedOrders);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleSort("date")}
        className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      >
        Sort by Date
      </button>
      <button
        onClick={() => handleSort("price")}
        className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
      >
        Sort by Price
      </button>
    </div>
  );
};

export default SortOrder;
