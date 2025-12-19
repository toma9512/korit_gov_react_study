import React from "react";

function CountButton({onClikcHandler, text}) {
    console.log("CountButton 렌더링 됨")
    return <button onClick={onClikcHandler}>{text}</button>;
}

export default CountButton;
