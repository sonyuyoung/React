import React, { useState } from "react";

const Props = (props) => {
  console.log(props);

  const [name, setName] = useState();

  //  setName(props.lunch);

  return (
    <div className="prop-page page">
      <h4>Props</h4>
      <p>
        props값 : {props.lunch},{props.age}
      </p>
    </div>
  );
};

export default Props;
