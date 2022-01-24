import { useState } from "react";

const ExUseState = () => {
  //   let name = "Mike";
  const [name, setName] = useState("Mike");

  const chageName = (nameVal) => {
    const newName = name === nameVal ? "Jane" : "Jebi";
    console.log(newName);
    setName(newName);
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => chageName("Jebi")}>ChangeName</button>
    </div>
  );
};

export default ExUseState;
