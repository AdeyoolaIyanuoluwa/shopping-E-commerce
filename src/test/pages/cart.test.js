import { fireEvent, render, screen } from "@testing-library/react"
import Cart from "../../pages/Cart/cart"
import { CartContext, CartProvider } from "../../container/cartContext"
import { BrowserRouter } from "react-router-dom"
const value = {
    total: 5,
    products: [
        {
            imageUrl: 'https://sdfsdfsdf',
            id: 1,
            productName: "Hoodies & Sweetshirt",
            amount: 20000,
            updatedAmount: 0,
            quantity: 0,
        }
    ],
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
};
describe('renders cart page', () => {
    it('renders cart', () => {
        render(
            <CartContext.Provider value={value}>
                <Cart />
            </CartContext.Provider>
            , { wrapper: BrowserRouter }
        )
        const cart = screen.getByText('PRODUCTS')
        expect(cart).toBeInTheDocument()
    })

    it('renders button click', () => {
        render(
            <CartProvider>
                <Cart handleSignup={jest.fn()} />
            </CartProvider>, { wrapper: BrowserRouter }
        )
        const button = screen.getByText('SHOP NOW')
        fireEvent.click(button)
        expect(button).toBeInTheDocument()
    })
})