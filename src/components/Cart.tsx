import * as Dialog from '@radix-ui/react-dialog'
import { Handbag, X } from 'phosphor-react'
import {
  ButtonBag,
  CloseButton,
  Content,
  ModalContent,
  ModalTitle,
  Overlay,
  TotalContainer,
} from '../styles/components/cart'
import { CartItem } from './CartItem'

import { useShoppingCart } from 'use-shopping-cart'
import { useState } from 'react'
import axios from 'axios'

export function Cart() {
  const { cartCount, cartDetails, clearCart } = useShoppingCart()
  const products = [] as any[]

  for (const id in cartDetails) {
    const product = cartDetails[id]
    products.push(product)
  }

  const price = products.map((itens) => {
    return itens.price
  })

  let total = 0
  let formatPrice
  for (const prices of price) {
    formatPrice = prices.toString().replace('R$', '').replace(',', '.')
    console.log(Number(formatPrice))
    total = total + Number(formatPrice)
  }

  const formatTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(total)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products,
      })

      const { checkoutUrl } = response.data

      clearCart()

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao direcionar ao checkout!')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonBag>
          <Handbag size={24} />
          {products.length > 0 && <span>{products.length}</span>}
        </ButtonBag>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <ModalTitle>Sacola de Compras</ModalTitle>
          <CloseButton asChild>
            <X size={24} weight="bold" />
          </CloseButton>

          <ModalContent>
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={{
                  id: product.id,
                  image: product.imageUrl,
                  name: product.name,
                  price: product.price,
                }}
              />
            ))}

            <TotalContainer>
              <div>
                <p>Quantidade</p>
                <span>{cartCount} itens</span>
              </div>
              <div>
                <strong>Valor total</strong>
                <h2>{formatTotal}</h2>
              </div>

              <button
                disabled={isCreatingCheckoutSession}
                onClick={handleBuyProduct}
              >
                Finalizar Compra
              </button>
            </TotalContainer>
          </ModalContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
