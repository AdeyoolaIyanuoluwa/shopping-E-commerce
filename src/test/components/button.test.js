import { render, screen, fireEvent } from "@testing-library/react"
import Button from "../../components/Button/primary"
import SecondaryButton from "../../components/Button/secondary";

describe('button component' , ()=>{
it('renders primary button', async() => {
    render(<Button children="MY BUTTON" />);
    const button = screen.getByText(/my button/i);
    expect(button).toBeInTheDocument();
  }); 

it('renders secondary button', async() => {
    render(<Button children="MY BUTTON" secondary />);
    const button = screen.getByText(/my button/i);
    expect(button).toBeInTheDocument();
  }); 
it('renders button click', async() => {
    render(<Button children="MY BUTTON" secondary handleSignup={jest.fn()}/>);
    const button = screen.getByText(/my button/i);
    expect(button).toBeInTheDocument();
  }); 

  it('renders another secondary button', async()=>{
    render(<SecondaryButton parent='MY BUTTON' addtocart={jest.fn()}/>)
    const button = screen.getByText(/my button/i);
    // fireEvent.click(button)
    expect(button).toBeInTheDocument();

  })
})

