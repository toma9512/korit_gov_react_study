import { css } from "@emotion/react";

export const layout = css`
    width: 100vw;
    height: 100vh;
    background-color: #fafafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    padding: 20px;
`;

