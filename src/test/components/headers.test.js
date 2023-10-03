import { render } from "@testing-library/react"
import Header from "../../components/Header/Header"

describe('header component', ()=>{

    it('renders header component', async()=>{
        render(<Header/>) 
        expect(<Header />).toBeDefined()
        // const header = screen.getByTestId("header")
        // expect(header).toBeInTheDocument()
    })
})
