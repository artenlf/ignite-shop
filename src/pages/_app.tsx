import type { AppProps } from 'next/app';
import Image from 'next/image';
import { globalStyles } from '../styles/global';

import { CartProvider } from 'use-shopping-cart';
import logoImg from '../assets/logo.svg';
import CartMenu from '../components/CartMenu';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode='checkout-session'
      stripe={process.env.STRIPE_PUBLIC_KEY}
      currency='BRL'
      shouldPersist
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="logo" priority />
          <CartMenu />
        </Header>
        <Component {...pageProps} />
      </Container>
      {/* <DebugCart /> */}
    </CartProvider>
  )

}
