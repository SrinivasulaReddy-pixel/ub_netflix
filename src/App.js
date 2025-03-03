import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from './container/mainPage/main';
import { Registration } from './container/Registration/Registration';
import { Profile } from './container/Profile/profile';
import { Home } from './components/home/home';
import { Series } from './components/series/series';
import { AccountDetails } from './components/accountdetails/accountdetails';
import { PaymentInfo } from './components/paymentinfo/paymentinfo';
import { WatchNow } from './components/watchNow/watchnow';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/Register" element={<Registration/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Series" element={<Series/>}></Route>
          <Route path="/AccountDetails" element={<AccountDetails/>}></Route>
          <Route path="/PaymentInfo" element={<PaymentInfo/>}></Route>
          <Route path="/WatchNow" element={<WatchNow/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
