import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Getall from './components/Getall';
import Registration from './components/Register';
import Getitem from './components/Getitem';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Registration></Registration>} /> 
        <Route path='/all' element={<Getall></Getall>} /> 
        <Route path='/getItemById/:id' element={<Getitem></Getitem>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
