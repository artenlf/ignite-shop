import * as Dialog from '@radix-ui/react-dialog';

import { Handbag, X } from 'phosphor-react';
import { useShoppingCart } from 'use-shopping-cart';
import { CartEntry } from './CartEntry';
import { CartItemsContainer, CloseButton, Content, Overlay, SummaryContainer, Title, Trigger } from './styles';

export default function CartMenu() {

  const cart = useShoppingCart()
  const { removeItem, cartDetails, formattedTotalPrice } = cart

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />
  ))

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
            {cartEntries.length === 0 &&
              <span
                className='empty-cart'
              >
                Ops! Parece que seu carrinho está vazio.
              </span>
            }
            {cartEntries.length > 0 &&
              cartEntries
            }
          </CartItemsContainer>
          <SummaryContainer>
            <span>Quantidade</span>
            <span>3 Itens</span>
            <strong>Valor total</strong>
            <strong>R$ 270,00</strong>
            <button
            // disabled={isCreatingCheckoutSession}
            // onClick={handleBuyCart}
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