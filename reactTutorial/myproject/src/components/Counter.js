import { Component } from "react";

class Counter extends Component {
    constructor() {
        super(); //Makes a call to the Component class constructor
        this.state = {
            counter: 0,
        };
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        })
    }

    double() {
        this.setState({
            counter: this.state.counter * 2,
        })
    }

    half() {
        this.setState({
            counter: this.state.counter / 2.
        })
    }
    render() {
        return (
            <div>
                <h3>Count value is: {this.state.counter} </h3>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
                <button onClick={() => this.double()}>Double</button>
                <button onClick={() => this.half()}>Half</button>

            </div>
        )
    }

}

export default Counter;