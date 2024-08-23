import { useState } from "react";

const Boton = (texto, fn) => {

    return (
        <button onClick={() => fn()}>{texto}</button>
    )
}

export default Boton;