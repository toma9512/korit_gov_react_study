import { css } from "@emotion/react";

export const container = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const listContainer = css`
    flex-grow: 1;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    overflow: hidden;

    & > ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 422px;
        overflow: auto;

        & > li {
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            border-bottom: 1px solid #dbdbdb;
            box-sizing: border-box;
            align-items: center;
            position: relative;

            & > div {
                display: flex;
                align-items: center;
            }

            & > div > input[type="checkbox"] {
                display: none;

                & + label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    width: 17px;
                    height: 17px;
                    border: 1px solid #dbdbdb;
                    box-sizing: border-box;
                    margin-right: 10px;
                }

                &:checked + label::after {
                    content: "";
                    display: block;
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background-color: cornflowerblue;
                }
            }
        }
    }
`;

export const todoInputContainer = css`
    margin-top: 10px;
    height: 40px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;

    & > input {
        outline: none;
        border: none;
        box-sizing: border-box;
        padding: 5px 15px;
        width: 100%;
        height: 100%;
    }
`;

export const trashBoxContainer = css`
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
        background-color: red;
        color: white;
    }
`;
