import { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message : "Welcome Home"
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thank You for coming!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>My Home</button>
            </div>
        )
    }
}

export default Message