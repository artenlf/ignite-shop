import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

import { Handbag, X } from 'phosphor-react';
import logo from '../assets/logo.svg';
import { CartItemsContainer, CloseButton, Content, Overlay, SummaryContainer, Title, Trigger } from './styles';

export default function CartMenu() {
  return (
    <Dialog.Root>
      <Trigger>
        <div
          className='icon-container'
        >
          <Handbag size={24} color={'#8D8D99'} weight="bold" />
        </div>
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>
            Sacola de compras
          </Title>
          <CartItemsContainer>
            <div>
              <Image src={logo} width={102} height={93} alt="logo" priority />
              <span>Camiseta X</span>
              <strong>R$ 99,99</strong>
              <button>Remover</button>
            </div>
            <span
              className='empty-cart'
            >
              Ops! Parece que seu carrinho está vazio.
            </span>
          </CartItemsContainer>
          <SummaryContainer>
            <span>Quantidade</span>
            <span>3 itens</span>
            <strong>Valor total</strong>
            <strong>R$ 270,00</strong>
            <button
              type='submit'
            >
              Finalizar compra
            </button>
          </SummaryContainer>
          <CloseButton>
            <X size={24} weight="bold" />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}