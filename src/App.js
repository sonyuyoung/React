import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Header from "./Header";
import Inf from "./pages/Inf";
import State from "./pages/State";
import Param1 from "./pages/Param1";
import Param2 from "./pages/Param2";
//추가적으로 , 헤더를 클릭햇을때 -> home내용이뜨도록 하기위해서 Route/Routes 임포트 추가
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 실제 화면을그려주는 App , 리액트 컴포넌트 : 시스템을 구성하는 부분 중 하나
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* info라는 주소요정이 왔을때 임포라는 jsx가 표현되도록  
          기존의 home내용이 없어지면서 */}
          <Route path="/info" element={<Inf />} />
          <Route path="/state" element={<State />} />
          {/* id값의 변수  */}
          <Route path="/param/:id" element={<Param1 />} />
          <Route path="/param" element={<Param2 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
