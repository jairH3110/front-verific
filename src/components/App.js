import Header from './Header';
import './../styles/App.css';
import RangoList from './RangoList';
import CreateRangos from './CreateRango';
import { Route, Routes } from 'react-router-dom';
import halo from '../styles/halo.jpg';
import Login from './Login';
import Textdavinci003 from './text-davinci003';

import Imagenes from './imagenes';
import { useTranslation } from "react-i18next";
import Moderacion from './moderacion';
import Ediciones from './edicion';
import Chat from './chat';
import Variacionesss from './variant';
import Search from './fitrador';






const App = () => {

  const { t } = useTranslation();


  return (
    <div  style={{ backgroundImage: `url(${halo})` }} >
      <Header />
      {t("hello_welcome_to_react")}
      <div >
        <Routes>
          <Route path="/" element={<RangoList/>} />
          <Route path="/create" element={<CreateRangos/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/text-davinci-003" element={<Textdavinci003/>} />
     
          <Route path="/imagenes" element={<Imagenes/>} />
          <Route path="/moderador" element={<Moderacion/>} />
          <Route path="/editor" element={<Ediciones/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/variacion" element={<Variacionesss/>} />
          <Route path="/filtrador" element={<Search/>} />
          </Routes>
   
      </div>
    </div>
  );
};

export default App;