import './App.css';
import Tab from "./Components/Tab";
import {useState} from "react";

function App() {
    const [content,setContent] = useState("");

    const show = (content) => {
        setContent(content)
    }

    return (
    <div className="App mt-4">
        <Tab name={"Tab1"} mail={show}>
            <div>
                <h1 className='text-success' >This is Tap 1</h1>
            </div>
        </Tab>
        <Tab name={"Tab2"} mail={show}>
            <div>
            <h1 className='text-warning' >This is Tap 2</h1>
            </div>
        </Tab>

        <Tab name={"Tab3"} mail={show}>
            <div>
            <h1 className='text-primary'>This is Tap 3</h1>
            </div>
        </Tab>
        <div className="container mt-3 w-50 border border-2 border-dark">
            <p className="p-4">
                {content}
            </p>
        </div>
    </div>
);
}

export default App;