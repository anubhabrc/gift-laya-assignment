import { z } from "zod";

export const allProductsSchema = z.array(
  z.object({
    ProductName: z.string(),
    OldPrice: z.number(),
    NewPrice: z.number(),
    PercentageOff: z.number(),
    Rating: z.number(),
    ProductDetails: z.string(),
  })
);
