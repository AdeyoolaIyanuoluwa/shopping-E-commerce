import { fireEvent, render,screen } from "@testing-library/react"
import CartProduct from "../../pages/Cart/cartProduct"
import { CartProvider } from "../../container/cartContext"


describe('cart products', ()=>{
it('renders cart products',()=>{
    render(
        <CartProvider>
            <CartProduct product/>
        </CartProvider>
    )
    const cartProduct = screen.getByTestId('product')
    expect(cartProduct).toBeInTheDocument()
})

it('renders cart products remove click',()=>{
    render(
        <CartProvider>
            <CartProduct product handleRemove={jest.fn()}/>
        </CartProvider>
    )
    const cartProduct = screen.getByText('Remove')
    fireEvent.click(cartProduct)
    expect(cartProduct).toBeInTheDocument()
})
})