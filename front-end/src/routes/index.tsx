import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import AssetList from "@/pages/AssetList";
import AssetDetail from "@/pages/AssetDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <div className="p-4">
            <AssetList />
          </div>
        ),
      },
      {
        path: "assets/:id",
        element: (
          <div className="p-4">
            <AssetDetail />
          </div>
        ),
      },
    ],
  },
]);
