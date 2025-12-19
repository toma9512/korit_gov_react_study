import React, { useState } from "react";
import Count from "./Count";
import CountButton from "./CountButton";

function CountState() {
    console.log("CountState 렌더링 됨")
    const [count, setCount] = useState(0);

    const plusOnclickHandler = () => {
        setCount(count + 1);
    };

    const minusOnclickHandler = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <Count count={count} />
            <CountButton onClikcHandler={plusOnclickHandler} text={"+1"} />
            <CountButton onClikcHandler={minusOnclickHandler} text={"-1"} />
        </div>
    );
}

export default CountState;
