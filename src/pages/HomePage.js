import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>정보처리기사 필기</h2>
      <h3>
        <Link to="/subject/1">1과목. 소프트웨어 설계</Link>
      </h3>
      <h3>
        <Link to="/subject/2">2과목. 소프트웨어 개발</Link>
      </h3>
      <h3>
        <Link to="/subject/3">3과목. 데이터베이스 구축</Link>
      </h3>
      <h3>
        <Link to="/subject/4">4과목. 프로그래밍 언어 활용</Link>
      </h3>
      <h3>
        <Link to="/subject/5">5과목. 정보시스템 구축 관리</Link>
      </h3>
    </>
  );
}
export default HomePage;
