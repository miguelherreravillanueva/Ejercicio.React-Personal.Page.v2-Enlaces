import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
