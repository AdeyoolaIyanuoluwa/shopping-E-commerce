import { fireEvent, render, screen } from "@testing-library/react"
import CartItems from "../../container/cartItems"
import { CartProvider } from "../../container/cartContext"
import { BrowserRouter } from "react-router-dom"

describe('cartitems container', ()=>{
it('renders cartitems container', () => {
    render(
        <CartProvider>
            <CartItems />
        </CartProvider>,{wrapper: BrowserRouter}
    )
    const cartItems = screen.getByTestId('container')
    expect(cartItems).toBeInTheDocument()
})
it('renders cartitems click', ()=>{
    render(
        <CartProvider>
            <CartItems cart = {jest.fn()}/>
        </CartProvider>,{wrapper: BrowserRouter}
    )
    const button = screen.getByText('Cart')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
})
})