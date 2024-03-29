import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import { Handbag, X } from 'phosphor-react';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import {
  CartItemsContainer,
  CloseButton,
  Content,
  Overlay,
  SummaryContainer,
  Title,
  Trigger
} from '../styles/pages/components/cart';
import { CartEntry } from './CartEntry';

export interface IProduct {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  description: string,
  defaultPriceId: string,
  currency: string,
  price_id: string,
}

export default function CartMenu() {

  const cart = useShoppingCart()
  const {
    incrementItem,
    decrementItem,
    removeItem,
    cartCount,
    cartDetails,
    formattedTotalPrice } = cart;

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartEntry
      key={entry.id}
      entry={entry}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
      removeItem={removeItem} />
  ))

  const numberOfCartEntries = cartEntries.length;

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: cartDetails,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  const totalPriceFormattedToPtBr = formattedTotalPrice.
    replace('.', ',',).
    replace('R$', 'R$ ')

  return (
    <Dialog.Root>
      <Trigger>
        <div
          className='icon-container'
        >
          <Handbag size={24} color={'#8D8D99'} weight="bold" />
          {numberOfCartEntries > 0 &&
            <div
              className='counter'>
              {cartCount}
            </div>
          }
        </div>
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>
            Sacola de compras
          </Title>
          <CartItemsContainer>
            {numberOfCartEntries === 0 &&
              <span
                className='empty-cart'
              >
                Ops! Parece que a sua sacola está vazia.
              </span>
            }
            {numberOfCartEntries > 0 &&
              cartEntries
            }
          </CartItemsContainer>
          <SummaryContainer>
            <span>Quantidade</span>
            <span>
              {cartCount}
              {cartCount !== 1 ? ' itens' : ' item'}
            </span>
            <strong>Valor total</strong>
            <strong>{totalPriceFormattedToPtBr}</strong>
            <button
              disabled={cartCount < 1 || isCreatingCheckoutSession}
              onClick={handleCheckout}
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