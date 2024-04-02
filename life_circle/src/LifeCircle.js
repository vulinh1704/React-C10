import {Component} from "react";

export class LifeCircle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1
        }
        console.log("1.Constructor");
    }

    componentDidMount() {
        console.log("3.ComponentDidMount"); // Sử dụng để cập nhật state
        this.setState({...this.state, number: 10});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("4.ComponentDidUpdate")
    }


    componentWillUnmount() {
        console.log("5.componentWillUnmount")
    }

    render() {
        console.log("2.Render");
        return (
            <>
                <h1>Hello World {this.state.number}</h1>
                <button onClick={() => {
                    setInterval(() => {
                        this.setState({...this.state, number: ++this.state.number});
                    }, 1000)
                }}>Đếm</button>
            </>
        )
    }
}