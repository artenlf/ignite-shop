import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  padding: '0 8.5rem',
  minHeight: 656,

  '.gradient': {
    minHeight: '100%',
    minWidth: '136px',
    position: 'absolute',
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

    opacity: 1
  },

  '.gradient-left': {
    left: 0,
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
  },

  '.gradient-right': {
    right: 0,
  },

  '.keen-slider__prev, .keen-slider__next': {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '50%',

    '&:disabled': {
      opacity: 0,
      cursor: 'default',
    },
  },

  '.keen-slider__next': {
    right: 16,
  },

  '.keen-slider__prev': {
    left: 16,
  },

  '.caret-right-icon, .caret-left-icon': {
    color: '$gray300',
    opacity: 0.25,

    '&:hover': {
      opacity: 1,
      transition: 'all 0.3s ease-in-out',
      '.gradient': {
        transition: 'all 0.3s ease-in-out',
        opacity: 1,
      },
    },
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    },

    strong: {
      color: "white",
      fontSize: "$lg",
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  },

  button: {
    backgroundColor: '$green500',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    maxHeight: '3.5rem',
    padding: '0.75rem',

    '&:hover': {
      backgroundColor: '$green300',
      cursor: 'pointer',
    },
  }
})