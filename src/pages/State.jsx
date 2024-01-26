import React, { useState } from "react";

// Hooks : 리액트에서 제공하는 기능? 함수 ?
// useState(): React Hooks 중에 하나
// 전역변수같은느낌 ? 한페이지 내에서 언제든지 값을넣고... 사용할 수 있는..
// 버튼이벤트에 많이 사용한다고함.

const State = () => {
  // param1 :변수이름과
  // setParam1 : 꼭 변수이름과 쌍을지어서 set이붙고 변수이름 Param1 뒤에 붙어야함
  // 초기값을 줄수있음 const [param1, setParam1] = useState("초기값");
  const [param1, setParam1] = useState("");
  //   state는 무조곤 param2, setParam2 들어가야함 세트!
  const [param2, setParam2] = useState("");
  const func1 = () => {
    setParam1("안녕");
  };

  const func2 = () => {
    setParam1("");
  };

  const textInput = (e) => {
    // console.log(e);
    console.log(e.target.value);
    // console.log(e.target.name);

    const { name, value } = e.target;
    console.log(name, value);
    setParam2(value);
  };

  return (
    <div className="state-page page">
      <h4>state</h4>
      {/* 1번  */}
      <p>{param1}</p>
      {/* 2번 */}
      <button onClick={func1}>버튼</button>
      <button onClick={func2}>초기화</button>
      <input type="text" onChange={textInput} name="param2" />
      <p>입력값 :{param2}</p>
    </div>
  );
};

export default State;
