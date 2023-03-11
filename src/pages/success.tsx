import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
  products: string[];
}

export default function Success({ customerName, product, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageContainer>
          {
            products.map((image, i) => {
              return (
                <div key={i}>
                  <Image src={image} alt='' width={120} height={110} />
                </div>
              )
            })
          }
        </ImageContainer>

        <h1>Compra efetuada!</h1>

        {
          <p>
            Uhuul <strong>{customerName}</strong>, sua
            {products.length === 1 ?
              <strong> {product.name} </strong>
              :
              ` compra de ${products.length} camisetas `
            }
            já está a caminho da sua casa.
          </p>
        }
        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>

  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;
  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;
    return (
      product.images[0]
    );
  });

  return {
    props: {
      customerName,
      product,
      products,
    }
  }
}