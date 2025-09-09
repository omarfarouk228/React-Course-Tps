import { useState } from "react";
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count === 0) return;
        setCount(count - 1);
    }


    return (<div className="counter-container">
        <button onClick={decrement}>-</button>
        <span className="counter-text">{ count }</span>
        <button onClick={increment}>+</button>
    </div>);
}

export default Counter;