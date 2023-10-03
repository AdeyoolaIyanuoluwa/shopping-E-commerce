import { render, screen } from "@testing-library/react"
import NavBar from "../../components/navbar/Navbar"
import { BrowserRouter } from "react-router-dom"

it('renders navbar component', async () => {
    render(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    )
    const Navbar = screen.getByTestId("navbar")
    expect(Navbar).toBeInTheDocument()
})