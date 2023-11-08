import { Component } from "react";

class Form extends Component {
    //Creating a state object
    state = {
        firstname: "",
        lastname: "",
    }

    handleChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        })

    }

    render() {
        return (
            <div>
                Form
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.firstname}>
                    </input>

                    <input
                        value={this.state.lastname}
                        type="text"
                        onChange={this.handleLastNameChange} >

                    </input>
                    <button type="submit">Submit</button>
                </form >
            </div >

        )
    }
}

export default Form