import Login from "../../components/Login/login"
import { fireEvent, render,screen } from "@testing-library/react"
describe('login component', ()=>{

it('renders login component ', async()=>{
    render(<Login/>)
    const login = screen.getByText('LOGIN HERE')
    expect(login).toBeInTheDocument()
})

it('renders input change', () => {
    render(<Login handleChange={jest.fn()} />)
    const input = screen.getAllByRole('textbox')
    fireEvent.change(input[0], {target: {value: "Go away"}})
    expect(input[0]).toHaveValue("Go away")
  })

  it('renders button click', ()=>{
    render(<Login handleSignin={jest.fn()} />)
    const button = screen.getByTestId('btn')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })

})