import { useState } from "react";

export default function SetColor() {
    const[color, setColor] = useState("Azul")

    return(
        <div>
            <h3>UseState basico</h3>
            <p>Minha cor favorita {color} </p>
            <button onClick={() => setColor("Verde") }>Mudar Cor</button>
        </div>
    )
}