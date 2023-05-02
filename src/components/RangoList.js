import { useQuery, gql } from '@apollo/client';
import React from 'react';
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
    
    </thead>
    <tbody >

    {data && data.rangos.map(( rango) => {return (
        <tr key={rango.id}>
       <td>{rango.faccion} {rango.raza} </td>
       
        </tr>

      )})}

    </tbody>
  </table>

    </div>
    
  );
};

export default RangoList;