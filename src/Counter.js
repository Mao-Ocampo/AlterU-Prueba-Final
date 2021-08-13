import React, { useState } from "react";

export const Counter = () => {
    const [ count, setCount] = useState(5);

    return (
        <div>
            <button onClick={()=> setCount(count +1)}>Incremento</button>
            <h1>Cuenta: {count}</h1>
            <button onClick={()=> setCount(count -1)}>Decremento</button>
            <button onClick={()=> setCount(5)}>Reset</button>
        </div>
    )
}