import Stripe from "stripe";

import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { MouseEvent, useState } from "react";

import * as Toast from '@radix-ui/react-toast';
import { useKeenSlider } from 'keen-slider/react';
import { CaretLeft, CaretRight, Handbag } from "phosphor-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

import 'keen-slider/keen-slider.min.css';
import { IProduct } from "../components/CartMenu";
import { stripe } from "../lib/stripe";
import { ToastRoot, ToastTitle, ToastViewport } from "../styles/pages/components/toast";
import { HomeContainer, Product } from "../styles/pages/home";

interface HomeProps {
  products: IProduct[];
}


export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();

  const [toastOpen, setToastOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    loop: {
      min: 0,
      max: 3,
    }
  })

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addItem(product);
  }

  function handlePrevSlide(event: any) {
    event.stopPropagation() || slider.current?.prev()
  }

  function handleNextSlide(event: any) {
    event.stopPropagation() || slider.current?.next()
  }

  return (
    <>
      <Head>
        <title>Ignite Shop | by artenlf</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product
                className="keen-slider__slide"
              >
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>
                      {
                        formatCurrencyString({
                          value: product.price,
                          currency: 'BRL'
                        })
                      }
                    </span>
                  </div>
                  <button
                    className="icon-background"
                    onClick={
                      (e) => {
                        handleAddToCart(e, product)
                        setToastOpen(true)
                      }
                    }
                  >
                    <Handbag size={32} weight="bold" />
                  </button>

                </footer>
              </Product>
            </Link>
          )
        })}
        <div className="gradient gradient-left" />
        <div className="gradient gradient-right" />
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className='keen-slider__prev'
        >
          <CaretLeft size={48} weight="bold" className="caret-left-icon" />
        </button >
        <button
          onClick={handleNextSlide}
          disabled={currentSlide === products.length - 2}
          className='keen-slider__next'
        >
          <CaretRight size={48} weight="bold" className="caret-right-icon" />
        </button>

        <Toast.Provider swipeDirection="right">

          <ToastRoot
            open={toastOpen}
            onOpenChange={setToastOpen}
          >
            <ToastTitle>Adicionado à sacola!</ToastTitle>
          </ToastRoot>
          <ToastViewport />
        </Toast.Provider>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // in 2 hours
  }
}