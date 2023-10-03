import { fireEvent, render, screen } from "@testing-library/react";
import Signup from "../../components/Signup/Signup";
import { BrowserRouter } from "react-router-dom";

describe('signup component', () => {
    it('renders signup component', () => {
        render(
            <BrowserRouter>
                <Signup />
            </BrowserRouter>
        )
        const signUp = screen.getByTestId('container')
        expect(signUp).toBeInTheDocument()
    });
    it('renders input change', () => {
        render(
            <BrowserRouter>
                <Signup handleChange={jest.fn()} />
            </BrowserRouter>
        )
        const input = screen.getAllByRole('textbox')
        fireEvent.change(input[0], {target: {value: "value"}})
        expect(input[0]).toHaveValue("value")
    });
    it('renders click',()=>{
         render(
                <BrowserRouter>
                    <Signup handleSignup={jest.fn()}/>
                </BrowserRouter>
            )
            const handleSignUp = screen.getByTestId('btn')
            fireEvent.click(handleSignUp)
            expect(handleSignUp).toBeInTheDocument()
    })
})