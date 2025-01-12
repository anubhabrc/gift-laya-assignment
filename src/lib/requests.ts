import { allProductsSchema } from "../schemas";
import { api } from "./api";

export const fetchAllProducts = async () => {
  const { data } = await api.get("/products");
  const validData = allProductsSchema.safeParse(data);
  if (!validData.success) {
    throw new Error("parse failed");
  }
  return validData.data;
};
