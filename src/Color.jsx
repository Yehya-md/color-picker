import {useState} from "react";

function Color() {
    const [color, setColor] = useState("");
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
return <div className="flex-column align-items-center">
    <h1 className="m-2">select a color</h1>
    <div style={{backgroundColor: color}} className="w-25 h-100 flex-row justify-content-center align-items-center">
        <p>selected color: {color}</p>
    </div>
    <input type="color" onChange={handleColorChange} value={color}/>

</div>
}

export default Color;