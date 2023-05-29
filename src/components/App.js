import Header from './Header';
import './../styles/App.css';
import RangoList from './RangoList';
import CreateRangos from './CreateRango';
import { Route, Routes } from 'react-router-dom';
import halo from '../styles/halo.jpg';
import Login from './Login';
import Textdavinci003 from './text-davinci003';
import ServiceDavinci003 from '../services/service.davinci-003';
import Imagenes from './imagenes';
const App = () => {
  return (
    <div  style={{ backgroundImage: `url(${halo})` }} >
      <Header />
      <div >
        <Routes>
          <Route path="/" element={<RangoList/>} />
          <Route path="/create" element={<CreateRangos/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/text-davinci-003" element={<Textdavinci003/>} />
     
          <Route path="/imagenes" element={<Imagenes/>} />
          </Routes>
   
      </div>
    </div>
  );
};

export default App;