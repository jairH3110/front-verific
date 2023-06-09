import { useQuery, gql } from '@apollo/client';
import React from 'react';


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
    comentarios
  
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
          <img class="imagenes" src={rango.origen} alt="se necesita como el usci" /> 
       <td>{rango.faccion} <td></td>{rango.raza}  {rango.rango} <td> {rango.caracteristicas} 
       <td>{rango.peligrosidad} {rango.representantes} {rango.especialidad} {rango.antiguedad}</td> </td>  </td>
       <img class="imagenes" src={rango.origen} alt="se necesita para el jale" />
       <p>{rango.comentarios}</p>
       </div> </div> 
        
      
        </tr>

      )})}

    </tbody>
  </table>

    </div>
    
  );
};

export default RangoList;