import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";

function App() {
    let text = "change component";
    const [theme, setTheme] = useState(false);
    const [style, setStyle] = useState("light");

    const handleClick = () => {
        setTheme(!theme);
        if (theme) {
          setStyle("light")
        } else{
          setStyle("dark")
        } 
    };

    return (
        <div className={style}>
            <button onClick={handleClick}>{text}</button>
            <MyComponent />
        </div>
    );
}
export default App;
