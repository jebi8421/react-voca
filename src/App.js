import "./index.css";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Footer from "./component/Footer";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
