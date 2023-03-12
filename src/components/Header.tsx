import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logoImg from '../assets/logo.svg';
import { HeaderContainer } from "../styles/pages/components/header";
import CartMenu from './CartMenu';

export function Header() {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg} alt="logo" priority />
      </Link>
      {
        pathname !== '/success' &&
        <CartMenu />
      }
    </HeaderContainer>
  )
}