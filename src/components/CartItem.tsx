import {
  CartItemContainer,
  ImageCartItemContainer,
  ProductCartContainer,
} from '../styles/components/cartItem'
import Image from 'next/image'

import { useShoppingCart } from 'use-shopping-cart'

interface CartItemProps {
  product: {
    name: string
    image: string
    price: number
    id: string
  }
}

export function CartItem({ product }: CartItemProps) {
  const { removeItem } = useShoppingCart()

  return (
    <CartItemContainer>
      <ImageCartItemContainer>
        <Image src={product.image} width={90} height={90} alt="" />
      </ImageCartItemContainer>
      <ProductCartContainer>
        <span>{product.name}</span>
        <strong>{product.price}</strong>
        <button onClick={() => removeItem(product.id)}>Remover</button>
      </ProductCartContainer>
    </CartItemContainer>
  )
}
