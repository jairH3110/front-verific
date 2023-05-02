import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import Rango from './Rango';

const FEED_QUERY = gql`

query{
  rangos{
    id
    faccion
    raza
    rango
    caracteristicas
    peligrosidad
    representantes
    origen
    especialidad
    antiguedad
  
  }
}
`


const RangoList = () => {
  
  const {data} = useQuery(FEED_QUERY);

  return (
    
    <div><table>
    <thead>
    <link rel="stylesheet" href="../styles/app.css"></link>

    </thead>
    <tbody >

    {data && data.rangos.map(( rango) => {return (
    
        <tr key={rango.id}>
          <div> <div class="div">
          <img class="imagenes" src={rango.origen} />
       <td>{rango.faccion} <td></td>{rango.raza}  {rango.rango} <td> {rango.caracteristicas} 
       <td>{rango.peligrosidad} {rango.representantes} {rango.especialidad} {rango.antiguedad}</td> </td>  </td>
       <img class="imagenes" src={rango.origen} />
       </div> </div> 
        
      
        </tr>

      )})}

    </tbody>
  </table>

    </div>
    
  );
};

export default RangoList;