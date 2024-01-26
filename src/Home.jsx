// Props : 상위 컴포넌트에서 하위컴포넌트로 파라미터를 전달하는것.
// Home -> Prop이라는 컴포넌트로 name과 age 파라미터 전달하기

import React from "react";
import Props from "./pages/Props";
import { Link } from "react-router-dom";
import { nation, nations } from "./data/data";

const Home = () => {
  return (
    <div className="home">
      <h4>Home</h4>
      {/* <Props lunch="샐러드" age="31" /> */}
      {/* 1번  */}
      <Link
        to={{
          pathname: "/param/10",
        }}
      >
        param전송(path variable)
      </Link>
      {/* 2_1번  */}
      <div>
        <Link to="/param?q=aa">param전송</Link>
        {/* 2_2번  */}
        <Link
          to={{
            pathname: "/param",
            search: "?q=aa&page=10",
          }}
        >
          param전송(query string)
        </Link>
      </div>

      <div>
        {nations.map((n) => (
          <Link
            to={{
              pathname: `/param/${n.name}`,
            }}
          >
            {n.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
