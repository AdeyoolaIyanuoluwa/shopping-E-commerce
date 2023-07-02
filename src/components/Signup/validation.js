export const Validation = (user)=>{
        const errors = {}

        const email_pattern =  /^(([\w]+)([@])([\w]+)([.])([a-zA-Z]{1,5})([.][\w]{1,5})?)$/
        const password_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(user.firstname === ""){
            errors.firstname = "*Required"
        }
        if(user.email === ""){
            errors.email = "*Required"
        }
        else if (!email_pattern.test(user.email)){
            errors.email = "Email does not match"
        }
        if(user.password === ""){
            errors.password = "*Required"
        } else if(password_pattern.test(user.password)){
            errors.name = "password does not match"
        }


        return errors
        
}