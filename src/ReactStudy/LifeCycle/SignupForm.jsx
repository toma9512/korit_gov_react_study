import React, { useState, useEffect } from "react";

/*
이메일 인풋에 입력이 될 떄 유효성 검사 실시
골뱅이 포함 여부에 따라서 없으면 에러 메세지로 "이메일 형식에 맞게 입력해주세요" 출력
비밀번호 인풋에 입력이 될 때 유효성 검사 실시
8자리 이상인지 여부에 따라서 아니면 에러메시지로 "비밀번호는 8자리 이상이어야 합니다." 출력
유효성 검사에 문제가 없으면 버튼 활성화, 문제가 하나라도 있으면 비활성화
가입하기 버튼을 누르면 alert 가입되었습니다 출력
*/

function SignupForm() {
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({});

    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        setIsDisabled(true);
        const newErrors = {};
        if (!inputValue.email.includes("@") && inputValue.email.length > 0) {
            newErrors.email = "이메일 형식에 맞게 입력해 주세요.";
        }
        if (inputValue.password.length < 8 && inputValue.password.length > 0) {
            newErrors.password = "비밀번호는 8자리 이상이어야 합니다.";
        }
        setError(newErrors);

        if (Object.keys(newErrors).length === 0 && inputValue.email && inputValue.password) {
            setIsDisabled(false);
        }
    }, [inputValue]);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const signupOnClickHandler = () => {
        alert("성공적으로 가입되었습니다.");
    };

    return (
        <div>
            <div>
                <input
                    type="email"
                    name="email"
                    onChange={onChangeHandler}
                    placeholder="이메일"
                />
                {!!error.email && <p>{error.email}</p>}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    onChange={onChangeHandler}
                    placeholder="비밀번호"
                />
                {!error.passwordError && <p>{error.password}</p>}
            </div>
            <button disabled={isDisabled} onClick={signupOnClickHandler}>
                가입하기
            </button>
        </div>
    );
}

export default SignupForm;
