import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from './container/mainPage/main';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
