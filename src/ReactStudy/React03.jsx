import React from "react";

function React03({ name, age, tel, ...other }) {
    console.log(other);
    return (
        <div>
            <div>이름: {name}</div>
            <div>나이: {age}</div>
            <div>주소: {other.address}</div>
        </div>
    );
}

export default React03;
