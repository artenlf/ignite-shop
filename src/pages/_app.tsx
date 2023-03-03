import type { AppProps } from 'next/app';
import Image from 'next/image';
import { globalStyles } from '../styles/global';

import logoImg from '../assets/logo.svg';
import CartMenu from '../components/CartMenu';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" priority />
        <CartMenu />
      </Header>
      <Component {...pageProps} />
    </Container>
  )

}
