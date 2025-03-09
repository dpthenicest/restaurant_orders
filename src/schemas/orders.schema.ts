import * as z from "zod";

export const addOrderSchema = z.object({
  id: z.string(),
  customer: z.string().min(3, { message: "customer name must be at least 3 characters" }),
  items: z.array(z.string()),
  totalPrice: z.number(),
  status: z.enum(["Pending", "Completed"]),
  timestamp: z.string(),
})