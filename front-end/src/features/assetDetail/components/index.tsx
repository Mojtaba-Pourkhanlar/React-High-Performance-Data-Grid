import { useParams } from "react-router-dom";
import Header from "./ui/Header";
import TransactionInformation from "./ui/TransactionInformation";
import OrderBookTable from "./ui/OrderBookTable";

const AssetDetailComponent = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="py-2 lg:px-4">
      <Header id={id!} />
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-1">
        <TransactionInformation id={id!} />
        <OrderBookTable id={id!} />
      </div>
    </div>
  );
};

export default AssetDetailComponent;
