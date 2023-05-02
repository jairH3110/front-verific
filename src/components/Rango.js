import React from 'react';

const Rango = (props) => {
  const { rango } = props;
  return (
    <div>
      <div>
        {rango.id} ({rango.faccion}) 
      </div>
    </div>
  );
};

export default Rango;