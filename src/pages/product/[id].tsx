import { stripe } from "@/src/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

export interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string,
    defaultPriceId: string,
    currency: string,
  }
}


export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart();

  // const price: string = formatCurrencyString({
  //   value: Number(product.price),
  //   currency: product.currency,
  //   language: 'pt-BR'
  // })

  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true);

  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.price_id,
  //     })

  //     const { checkoutUrl } = response.data;

  //     window.location.href = checkoutUrl;
  //   } catch (error) {
  //     setIsCreatingCheckoutSession(false);

  //     alert('Falha ao redirecionar ao checkout')
  //   }
  // }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt=''
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {
              formatCurrencyString({
                value: product.price,
                currency: 'BRL'
              })
            }
          </span>

          <p>{product.description}</p>
          <button onClick={() => addItem(product)}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>

  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_NI92wVAXU0p0VF' } }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour 
  }
}