import Home from './Home';
import User from './User';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route  path='/User:id'element={<User/>}></Route>
      </Routes>
     
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
