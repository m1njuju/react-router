// 쿼리스트링 ?로 시작하고 키=값 한 쌍으로 들어오는 값
// 여러 개의 키=값으로 들어오게 될 때는 &를 통해서 들고온다
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Intro = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const username = searchParams.get("username");
  // router v6 추가
  const num = searchParams.get("num");
  return (
    <div>
      <h1>처음 소개페이지입니다</h1>
      <p> 간단한 소개를 하려고 합니다</p>
      <p> 쿼리스트링: {location.search}</p>
      <p> useSearchParams: {num} </p>
      {/** 주소로 intro? username=green 이 들어왔을 때 */}
      {/** 아래에 환영합니다가 출력되고 그 외에는 출력이 되지 않게 JSX로 작성 */}
      {
        // if문을 간단하게 쓰기위해 ? : 와 같은 삼항 연산자나 && || 연산자 사용
        // && : ? 대신에 && 연산자를 사용하면 참일 때 뒤에 작성한 태그를 출력한다.
        // || : ? 대신에 || 연산자를 사용하면 거짓일 때(값이 없을 때) 뒤에 작성한 태그를 출력한다.
        username === "green" && <p>환영합니다</p>
      }
    </div>
  );
};

export default Intro;
