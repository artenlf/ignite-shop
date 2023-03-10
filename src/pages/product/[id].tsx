import { stripe } from "@/src/lib/stripe"
import * as Toast from '@radix-ui/react-toast'
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from 'react'
import Stripe from "stripe"

import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { IProduct } from "@/src/components/CartMenu"
import { ToastDescription, ToastRoot, ToastTitle, ToastViewport } from '@/src/styles/pages/components/toast'
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"



export interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart();
  const [toastOpen, setToastOpen] = useState(false);



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
          <button onClick={() => {
            addItem(product)
            setToastOpen(true)
          }
          }
          >
            Colocar na sacola
          </button>
          <Toast.Provider swipeDirection="right">
            <ToastRoot
              open={toastOpen}
              onOpenChange={setToastOpen}
            >
              <ToastTitle>Adicionado à sacola!</ToastTitle>
              <ToastDescription>{product.name}</ToastDescription>
            </ToastRoot>
            <ToastViewport />
          </Toast.Provider>
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