// jsx / js = > jsx 로 만들어서 컴포넌트를 관리하면 에러체크가 잘된다 ?

// es6 로 함수를 표현하는방법 1번
const Components1 = () => {
  return (
    // <> -> 이렇게도 씀
    <div className="components1">
      <h2>테스트</h2>
    </div>
  );
};

// 반드시 뒤에붙어야하는것 하나의 컴포넌트 하나의 함수 + export default
export default Components1;
