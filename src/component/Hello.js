import { useState } from "react";
import UserName from "./UserName";

const Hello = ({ age }) => {
  //   let name = "Mike";
  const [name, setName] = useState("Mike");
  const [age2, setAge] = useState(age);
  console.log(age);
  const msg = age2 > 19 ? "성인입니다." : "미성년자입니다.";

  const chageName = (nameVal) => {
    const newName = name === nameVal ? "Jane" : "Jebi";
    console.log(newName);
    setName(newName);
  };

  let users = ["JB", "HJ", "CE"];
  console.log(users);
  let [user1, user2, user3] = users;
  console.log(user1);
  console.log(user2);
  console.log(user3);

  let [a, b, c] = [1, 2];
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);

  let user = { namee: "Mike", agee: 30 };
  let { namee, agee } = user;
  console.log(namee);
  console.log(agee);

  return (
    <div>
      <h2>
        {name} : {age2}세, {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          setAge(age2 + 1);
        }}
      >
        ChangeName
      </button>
    </div>
  );
};

export default Hello;
