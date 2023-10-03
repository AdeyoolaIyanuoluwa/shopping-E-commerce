import { render,screen } from "@testing-library/react"
import Products from "../../pages/Products/products"
import { CartProvider } from "../../container/cartContext"
import { BrowserRouter } from "react-router-dom"
describe('products page',()=>{
    it('renders products page', ()=>{
        render(
            <CartProvider>
                <Products/>
            </CartProvider>, {wrapper: BrowserRouter}
        )
        const product = screen.getByTestId("main")
        expect(product).toBeInTheDocument()
    })
})