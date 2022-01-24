import World from "./World";
import style from "./Hello.module.css";

const Hello = () => {
  return (
    <div>
      <World />
      <button onClick={showName}>Show name</button>
      <button onClick={() => showAge(4)}>Show age</button>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

const showName = () => {
  alert("Show Name");
};

const showAge = (age) => {
  alert(age);
};

const showText = (e) => {
  console.log(e.target.value);
};

export default Hello;
