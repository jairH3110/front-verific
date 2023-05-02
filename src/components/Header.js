import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;