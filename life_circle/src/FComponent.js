import {useEffect, useState} from "react";

export function FComponent() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "Linh"
        },
        {
            id: 2,
            name: "C10"
        }
    ]);
    const [inputId, setInputId] = useState("");
    const [inputName, setInputName] = useState("");


    useEffect(() => { // Tương tự DID Mount
        console.log("1");
    }, []);
    return (
        <>
            <h1>Danh sách sinh viên</h1>
            <input type="text" value={inputId} onChange={(event) => {
                setInputId(event.target.value)
            }}/>
            <input type="text" value={inputName} onChange={(event) => {
                setInputName(event.target.value)
            }}/>
            <button onClick={() => {
                let newList = [...list, {id: inputId, name: inputName}];
                setList(newList);
                setInputId("");
                setInputName("");
            }}>Add
            </button>
            {
                list.map((item) => (
                    <div key={item.id}>
                        <h5>Id: {item.id}, Name: {item.name}</h5>
                    </div>
                ))
            }
        </>
    )
}