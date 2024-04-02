import {useState} from "react";
import {LifeCircle} from "./LifeCircle";
import {FComponent} from "./FComponent";
import {ToDo} from "./ToDo";


function App() {
    // const [isShow, setIsShow] = useState(false);
    // const [number, setNumber] = useState(5);
    return (
        // <>
        //     <button onClick={() => {
        //         setIsShow(!isShow)
        //     }}>Show
        //     </button>
        //     <button onClick={() => {
        //         setNumber(10)
        //     }}>Change</button>
        //     {isShow && <LifeCircle number={number}/>}
        // </>

        <>
            {/*<FComponent/>*/}
            <ToDo/>
        </>
    );
}

export default App;
