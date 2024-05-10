import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Predict from "./component/Predict";
import Information from "./component/Information";
import Map from "./component/Map";
import Report from "./component/Report";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/predict" element={<Predict />} />
        <Route exact path="/information" element={<Information />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
