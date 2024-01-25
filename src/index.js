import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// public -> index.html -> root
// ReactDOM 현재문서에 root 라는 아이디를 가져온디
const root = ReactDOM.createRoot(document.getElementById("root"));
// 그 루트에 render 그려준다
root.render(<App />);
