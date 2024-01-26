// Props : 상위 컴포넌트에서 하위컴포넌트로 파라미터를 전달하는것.
// Home -> Prop이라는 컴포넌트로 name과 age 파라미터 전달하기

import React from "react";
import Props from "./pages/Props";

const Home = () => {
  return (
    <div className="home">
      <h4>Home</h4>
      <Props lunch="샐러드" age="31" />
    </div>
  );
};

export default Home;
