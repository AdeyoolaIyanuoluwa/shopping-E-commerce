import Input from "../../components/Input/input"
const { render, screen, fireEvent } = require("@testing-library/react")


it('renders button', ()=>{
    render(<Input onChangeinp={jest.fn()} name="name" value='value' type='type' placeholder='input' />)
    const input = screen.getByTestId("input")
    fireEvent.change(input)
    expect(input).toBeInTheDocument()
})