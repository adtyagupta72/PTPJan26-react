import React from "react"

class Forms extends React.Component
{
    state = {email: "", password: ""}
    constructor()
    {
        super()
    }

    handleSubmit =(event) =>
    {
        event.preventDefault()
        console.log("Form is submitted")
        console.log("Email: ", this.state.email)
        console.log("Password: ", this.state.password)
        let existingEmail = "abc@gmail.com"
        if(this.state.email == existingEmail)
        {
            alert("This email is already existing, please use another one or login!")
        }
    }

    render()
    {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <h1>Registration</h1>
                <label>
                    Email:
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={e => this.setState({email:e.target.value})} required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={e => this.setState({password:e.target.value})} required
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>)
    }
}
export default Forms