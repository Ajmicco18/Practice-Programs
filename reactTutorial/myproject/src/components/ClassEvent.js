import { Component } from "react"

class ClassEvent extends Component {

    handleClick() {
        console.log("Class based event handling")
    }

    render() {
        return <div>
            This is a class based component
            <button onClick={this.handleClick}>Click</button>
        </div>
    }
}

export default ClassEvent