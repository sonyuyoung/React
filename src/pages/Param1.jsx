import React from "react";
import { useParams } from "react-router-dom";

const Param1 = () => {
  // useParams 에서 id값 꺼냄
  const { id } = useParams();
  console.log(id);
  return (
    <div className="param1-page page">
      <h4>Param1</h4>
      <p>요청아이디 :{id}</p>
    </div>
  );
};

export default Param1;
