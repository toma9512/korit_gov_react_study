import React from "react";

function React02() {
    console.log("React02 렌더링 됨")
    const student = {
        name: "홍길동",
        age: 27,
        hobby: ["여행가기", "음악감상", "영화감상"],
    };

    return (
        <div>
            <div>이름: {student.name}</div>
            <div>나이: {student.age} ({student.age >= 20 ? "성인" : "미성년자"})</div>
            <div>
                <p>취미:</p>
                <ul>
                    {student.hobby.map((hobbyName, index) => {
                        return <li key={index}>{hobbyName}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default React02;
