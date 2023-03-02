import type { AppProps } from 'next/app';
import Image from 'next/image';
import { globalStyles } from '../styles/global';

import { Handbag } from 'phosphor-react';
import logoImg from '../assets/logo.svg';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" priority />
        <div
          className='icon-background'>
          <Handbag size={24} color={'#8D8D99'} weight="bold" />
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  )

}
