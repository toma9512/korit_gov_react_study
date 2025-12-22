import React, { useEffect, useState } from "react";

function Hook07() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [h1Name, setH1Name] = useState("");
    const [h1Age, setH1Age] = useState("");

    const nameOnChangeHandler = (e) => {
        setName(e.target.value);
    };

    const ageOnChangeHandler = (e) => {
        setAge(e.target.value);
    };

    const nameOnClickHandler = () => {
        setH1Name(name);
    };

    const ageOnClickHandler = (e) => {
        setH1Age(age);
    };

    // useEffect : 렌더링 이후 실행되는 사이드 이펙트(부수 효과)를 다루기 위한 훅
    useEffect(() => {
        // 렌더링 이후 실행할 작업
        console.log("마운트 됨", name, age)

        return () => {
            // cleanup함수 : 컴포넌트가 언마운트(소멸) 될 때 실행할 작업
            console.log("언마운트 됨", name, age)
        }
    }, [name, age]);
    // (콜백 함수, 의존성 배열)의 형태로 들어가게 됨
    // 의존성 배열 : 상태에 의존하게 해 상태값이 바뀔때 마다 이펙트 발생
    // 최초의 렌더링이 일어날 때 콜백함수가 실행됨
    // 배열에 있는 값들이 바뀔 때 마다 콜백함수가 실행됨
    // return () => {} : 언마운트될 때 실행될 함수

    return (
        <div>
            <h1>{h1Name}</h1>
            <h1>{h1Age}</h1>
            <input type="text" onChange={nameOnChangeHandler} />
            <button onClick={nameOnClickHandler}>이름 확인</button>
            <br />
            <input type="text" onChange={ageOnChangeHandler} />
            <button onClick={ageOnClickHandler}>나이 확인</button>
        </div>
    );
}

export default Hook07;
