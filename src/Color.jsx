import {useState} from "react";

function Color() {
    const [color, setColor] = useState("red");
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
return <>
    <div className="bg-info w-25">{color}</div>
    <input type="color" onChange = {handleColorChange}/>
</>
}

export default Color;