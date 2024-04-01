import {Component} from "react";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    name: "Linh"
                },
                {
                    id: 2,
                    name: "C10"
                }
            ],
            inputId: "",
            inputName: ""
        }
    }


    add = () => {
        let newStudent = {
            id: this.state.inputId,
            name: this.state.inputName
        }
        let newState = {...this.state, list: [...this.state.list, newStudent], inputName: "", inputId: ""};
        this.setState(newState);
    }

    input = (event) => {
        console.log(event.target.name);
        let newState = {...this.state, [event.target.name]: event.target.value};
        this.setState(newState)
    }


    render() {
        return (
            <>
                <h1>Student Manager</h1>
                <input type="number" name={"inputId"} value={this.state.inputId} placeholder={"Id"} onChange={this.input}/>
                <input type="text" name={"inputName"} value={this.state.inputName} placeholder={"Name"} onChange={this.input}/>
                <button onClick={this.add}>Add</button>
                {
                    this.state.list.map((item) => (
                        <div key={item.id}>
                            <h4>Id: {item.id}, Name: {item.name}</h4>
                        </div>
                    ))
                }
            </>
        )
    }
}