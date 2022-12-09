import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Main/>} />
      </Routes>
  );
}

export default App;
