import {Component} from "react";

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Linh"
        }
        // Là một đối tượng đại diện cho thành phần dữ liệu trong component;
        // Khi một state thay đổi thì component sẽ re-render


        // Prop là một đối tượng đại diện cho dữ liệu truyền từ ngoài vào
        // Khi một props thay đổi thì component cũng sẽ re-render
    }



    render() {
        return (
            <>
                <h1>Props: {this.props.a}</h1>
                <h2>State : {this.state.name}</h2>
                <input type="text" onChange={(event) => {
                    this.setState({name: event.target.value});
                }}/>
            </>
        )
    }
}
