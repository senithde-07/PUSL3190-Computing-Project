import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from '../src/pages/Home';
import Info from '../src/pages/Info';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/information" element={<Info />} />
          <Route path="/" element={<Navigate to="/home" />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
