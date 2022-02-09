import { useRef } from "react";
import useFetch from "../hooks/useFetch";
import use

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  const addWord = (e) => {
    e.preventDefault();

    if (engRef.current.value.trim().length < 1) {
      alert("Eng 값을 입력하세요.");
      engRef.current.focus();
    }

    if (korRef.current.value.trim().length < 1) {
      alert("Kor 값을 입력하세요.");
      korRef.current.focus();
    }

    fetch(`http://localhost:3001/words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eng: engRef.current.value,
        kor: korRef.current.value,
        day: dayRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("단어가 추가되었습니다.");
        History.pushState("", "", `/day/${dayRef.current.value}`);
      }
    });
  };

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <>
      <form>
        <div className="input_area">
          <label>Eng</label>
          <input type="text" placeholder="ex) Computer" ref={engRef}></input>
        </div>
        <div className="input_area">
          <label>Kor</label>
          <input type="text" placeholder="ex) 컴퓨터" ref={korRef}></input>
        </div>
        <div className="input_area">
          <label>Day</label>
          <select ref={dayRef}>
            {days.map((day) => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
        <div className="input_area">
          <button onClick={addWord}>저 장</button>
        </div>
      </form>
    </>
  );
}
