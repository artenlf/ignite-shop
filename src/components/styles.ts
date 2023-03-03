import * as Dialog from '@radix-ui/react-dialog';
import { styled } from "../styles";

export const Trigger = styled(Dialog.Trigger, {
  borderRadius: '6px',
  backgroundColor: '$gray800',
  border: 'none',
  color: '$gray500',
  cursor: 'pointer',
  padding: '0.75rem',
  maxHeight: '3rem',
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  right: '-13.4%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  minWidth: '32rem',
  padding: '2.5rem 3rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

})

export const Title = styled(Dialog.Title, {
  fontSize: 20,
  marginTop: '1.5rem',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray500',
})

export const CartItemsContainer = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',

  div: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gap: 2,
    padding: '2rem 0 ',
  },

  img: {
    gridRow: '1 / 3 span',
  },

  span: {
    fontWeight: 'bold',
  },

  button: {
    background: 'transparent',
    border: 'none',
    color: '$green500',
    fontWeight: 'bold',
    maxWidth: 'fit-content',
  }

})