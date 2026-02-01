import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Yes from './pages/yes';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/yes' element={<Yes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
