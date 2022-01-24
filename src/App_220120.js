import "./App.css";

function App() {
  const name = "jebi";
  const naverInfo = {
    name: "NAVER",
    url: "https://www.naver.com",
  };

  return (
    <div className="App">
      <h1 style={{ color: "red", backgroundColor: "blue" }}>Welcome!</h1>
      <div>Hello, {name}</div>
      <div>
        <a href={naverInfo.url} target="_blank">
          {naverInfo.name}
        </a>
      </div>
    </div>
  );
}

export default App;
