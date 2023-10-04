import { fireEvent, render,screen } from "@testing-library/react"
import CartProduct from "../../pages/Cart/cartProduct"
import { CartProvider } from "../../container/cartContext"


describe('cart products', ()=>{
it('renders cart products',()=>{
    render(
        <CartProvider>
            <CartProduct product={{
                 imageUrl: 'https://sdfsdfsdf',
                 id: 1,
                 productName: "Hoodies & Sweetshirt",
                 amount: 20000,
                 updatedAmount: 0,
                 quantity: 0, 
            }} />
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