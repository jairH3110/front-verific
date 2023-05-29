import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constans';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
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
                IA-imagenes
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