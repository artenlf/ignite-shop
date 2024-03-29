import { IProduct } from "@/src/components/CartMenu";
import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function checkoutHandler(req: NextApiRequest, res: NextApiResponse) {
  const { products } = req.body as { products: IProduct };

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!products) {
    return res.status(400).json({ error: "Products not found." });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}`;


  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: Object.values(products ?? {}).map((product) => ({
      price: product.defaultPriceId,
      adjustable_quantity: { enabled: true, minimum: 1, maximum: 100 },
      quantity: product.quantity,
    })),
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}