import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
export const BaseUrl = "http://localhost:8080/auth"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
      </Routes>
   
    </div>
  );
}

export default App;
