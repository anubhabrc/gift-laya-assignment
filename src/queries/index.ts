import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../lib/requests";

export const useGetAllProductsQuery = () => {
  const query = useQuery({
    queryKey: ["all-products"],
    queryFn: fetchAllProducts,
  });
  return query;
};
