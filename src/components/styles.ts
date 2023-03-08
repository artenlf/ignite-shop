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

  display: 'flex',
  flexDirection: 'column',
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
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: '$green500',
  },
})

export const CartItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: 519,
  overflow: 'auto',

  div: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'min-content auto',
    gridTemplateRows: 'min-content auto',
    columnGap: 20,
    padding: '2rem 0 ',

    img: {
      gridRow: '1 / 3 span',
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: 8,
    },

    strong: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
    },

    span: {
      fontSize: '1.125rem',
    },

    button: {
      background: 'transparent',
      border: 'none',
      color: '$green500',
      fontWeight: 'bold',
      maxWidth: 'fit-content',

      '&:hover': {
        borderBottom: '1px solid $green500',
        lineHeight: 'calc(100% - 1px)',
      },
    },
  },

  '.empty-cart': {
    fontSize: '1.25rem',
    textAlign: 'center',
    alignSelf: 'center',
    margin: 'auto 0',
    maxWidth: '17.5rem',
  },
})

export const SummaryContainer = styled('div', {
  display: 'grid',
  position: 'fixed',
  bottom: 48,
  gap: 8,
  gridTemplateColumns: 'repeat 2',
  justifyContent: 'space-between',
  minWidth: 384,

  span: {
    gridRow: '1',

    '&:nth-child(2)': {
      justifySelf: 'end',
    }
  },

  strong: {
    gridRow: '2',
    fontSize: '1.125rem',
  },

  button: {
    padding: '1.5rem 0',
    border: 'none',
    borderRadius: 8,
    gridColumn: '1 / 2 span',
    marginTop: '3rem',

    backgroundColor: '$green500',
    color: '$white',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    transition: '0.2s ease-in-out',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    '&:hover': {
      backgroundColor: '$green300',
      cursor: 'pointer',
    }
  }
})