import { Component } from "react";

class Counter extends Component {
    constructor() {
        super(); //Makes a call to the Component class constructor
        this.state = {
            counter: 0,
        };

        //this.increment = this.increment.bind(this)
    }

    increment = () => { //Arrow functions have access to this keyword
        console.log(this)
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        return (
            <div>
                <h3>Count value is: {this.state.counter} </h3>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }

}

export default Counter;