import dummy from "../db/data.json";
import { Link, useParams } from "react-router-dom";
import Word from "./Word";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const day = useParams().day;
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => res.json())
  //     .then((data) => setWords(data));
  // }, []);

  //const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <div className="day_div">
        <span>Day {day}</span>
        <Link to="/">뒤로가기</Link>
      </div>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
