// import { render } from "@testing-library/react"
import Validation from "../../components/Signup/validation"

describe("validation", ()=>{

// it('renders validation', ()=>{
//    const user ={
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//    }
//    const errors = Validation(user);
//    console.log(Validation);
// //    render(<Validation user={user} />)
//    expect(errors.firstname).toBe("*Required");
//    expect(errors.lastname).toBe("*Required");
//    expect(errors.email).toBe("*Required");
//    expect(errors.password).toBe("*Required");
// })
it("Validation returns error for invalid email", () => {
    const user = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  
    const errors = Validation(user);
  
    expect(errors.email).toBeInTheDocument("Invalid Email");
  });
  it("Validation returns error for invalid password", () => {
    const user = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  
    const errors = Validation(user);
  
    expect(errors.password).toBeInTheDocument("password does not match");
  });
  
})