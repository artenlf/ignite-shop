import * as Dialog from '@radix-ui/react-dialog';

import { Handbag, X } from 'phosphor-react';
import { useShoppingCart } from 'use-shopping-cart';
import { CartEntry } from './CartEntry';
import { CartItemsContainer, CloseButton, Content, Overlay, SummaryContainer, Title, Trigger } from './styles';

export default function CartMenu() {

  const cart = useShoppingCart()
  const { removeItem, cartCount, cartDetails, formattedTotalPrice, redirectToCheckout } = cart

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />
  ))

  const numberOfCartEntries = cartEntries.length;

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
            {numberOfCartEntries === 0 &&
              <span
                className='empty-cart'
              >
                Ops! Parece que seu carrinho está vazio.
              </span>
            }
            {numberOfCartEntries > 0 &&
              cartEntries
            }
            {status === 'redirect-error' && (
              <p>Unable to redirect to Stripe checkout page.</p>
            )}
          </CartItemsContainer>
          <SummaryContainer>
            <span>Quantidade</span>
            <span>
              {cartCount}
              {cartCount !== 1 ? ' itens' : ' item'}
            </span>
            <strong>Valor total</strong>
            <strong>{formattedTotalPrice}</strong>
            <button
              disabled={cartCount === 0}
            // onClick={handleCartCheckout}
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