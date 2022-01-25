import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h2>잘못된 접근입니다.</h2>
      <Link to="/" className="back_btn">
        돌아가기
      </Link>
    </>
  );
}
