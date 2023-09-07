import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const ButtonBag = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray800',
  padding: '0.75rem',
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',

  svg: {
    color: '$gray300',
  },

  span: {
    backgroundColor: '$green500',
    color: '$white',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '50%',
    'margin-right': '-1rem',
    'margin-top': '-1rem',

    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: '#00000075',
})

export const ModalTitle = styled(Dialog.Title, {
  fontSize: '1.25rem',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '24px',
  right: '24px',
  cursor: 'pointer',

  svg: {
    color: '$gray300',
  },
})

export const ModalContent = styled(Dialog.Description, {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 80px)',
})

export const Content = styled(Dialog.Content, {
  position: 'absolute',
  top: 0,
  right: '-100%',
  padding: '72px 48px',
  width: '100%',
  maxWidth: 480,
  height: '100%',
  maxHeight: '100vh',
  zIndex: '2',
  background: '$gray800',
  "&[data-state='open']": {
    right: 0,
  },
})

export const TotalContainer = styled('div', {
  marginTop: 'auto',
  marginBottom: 48,

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  strong: {
    fontSize: '$md',
  },

  span: {
    fontSize: '$md',
  },

  h2: {
    fontSize: '$xl',
  },

  button: {
    width: 384,
    height: 69,
    borderRadius: 8,
    color: '$white',
    background: '$green500',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    marginTop: 57,

    '&:hover': {
      background: '$green300',
    },
  },
})
