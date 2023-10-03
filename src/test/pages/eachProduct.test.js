import { fireEvent, render, screen } from "@testing-library/react"
import EachProduct from "../../pages/Cart/eachProduct"
import { CartProvider } from "../../container/cartContext"
describe('each product page', () => {
    it('renders each product', () => {
        render(
            <CartProvider>
                <EachProduct product />
            </CartProvider>
        )
        const eachProduct = screen.getByTestId('eachproduct')
        expect(eachProduct).toBeInTheDocument()
    })
    it('renders each product click', () => {
        render(
            <CartProvider>
                <EachProduct product addtocart={jest.fn()} />
            </CartProvider>
        )
        const eachProduct = screen.getByTestId("btn")
        fireEvent.click(eachProduct)
        expect(eachProduct).toBeInTheDocument()
    })
})