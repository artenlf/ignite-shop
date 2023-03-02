import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 8.5rem',
  width: '100%',
  maxWidth: '100%',

  '.icon-background': {
    borderRadius: '6px',
    backgroundColor: '$gray800',
    color: '$gray500',
    padding: '0.75rem',
    maxHeight: '3rem',
  }
}
)