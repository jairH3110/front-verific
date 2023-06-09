import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constans';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";





const Header = () => {
 
  
  
  const { t } = useTranslation();


  const navigate = useNavigate();


  const authToken = localStorage.getItem(AUTH_TOKEN);
  console.log("hola xd")
  console.log(authToken)
  return (
    <div className="flex pa1 justify-between nowrap orange" >
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">RANGOS MILITARES</div>
        </Link>        
        <Link to="/" className="ml1 no-underline black">
          ver api rangos
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/create"
          className="ml1 no-underline black"
        >
          ingresar
        </Link>
        <div className="ml1">|</div>
        <li>
              <Link to="/text-davinci-003" className="no-underline black">
                IA
              </Link>
            </li>

          <div className="ml1">|</div>
        <li>
              <Link to="/imagenes" className="no-underline black">
                IA-img
              </Link>
            </li>

          <div className="ml1">|</div>
        <li>
              <Link to="/moderador" className="no-underline black">
                IA-Mod
              </Link>
            </li>


          <div className="ml1">|</div>
        <li>
              <Link to="/editor" className="no-underline black">
                IA-Edit
              </Link>
            </li>
            
            <li>
              <Link to="/chat" className="no-underline black">
                IA-chat
              </Link>
            </li>

            <li>
              <Link to="/variacion" className="no-underline black">
                IA-lista
              </Link>
            </li>


            <li>
              <Link to="/filtador" className="no-underline black">
                seacrh
              </Link>
            </li>

        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              submit
            </Link>
          </div>
        )}
      </div>


      <div className="flex flex-fixed">
       <div className="ml1 pointer black">
         {t('select_language')}
      </div>
      <div className="ml1 pointer black"> : </div>
      <div>     
        <LanguageSelect className="ml1 pointer black"/>
      </div>
     </div>





      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            login
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Header;