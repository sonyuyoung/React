import React from "react";
import { useSearchParams } from "react-router-dom";

const Param2 = () => {
  const [parmas] = useSearchParams();
  console.log(parmas.get("q"));
  console.log(parmas.get("page"));
  return (
    <div className="param2-page page">
      <h2>param2</h2>
    </div>
  );
};

export default Param2;
