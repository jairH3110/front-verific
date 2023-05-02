import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_RANGO_MUTATION = gql`
mutation PostMutation(
  
    $faccion: String!
    $raza: String!
    $rango: String!
    $caracteristicas: String!
    $peligrosidad: String!
    $representantes: String!
    $origen: String!
    $especialidad: String! 
    $antiguedad: String!    
    ){ 
        createRango(faccion: $faccion, raza: $raza, rango: $rango, caracteristicas: $caracteristicas, peligrosidad: $peligrosidad, representantes: $representantes, origen: $origen, especialidad: $especialidad, antiguedad: $antiguedad ){
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
`;

const CreateRangos = () => {
  const [formState, setFormState] = useState({
    faccion:'',
    raza:'',
    rango:'',
    caracteristicas:'',
    peligrosidad:'',
    representantes:'',
    origen:'',
    especialidad:'',
    antiguedad:''
  });


  const [CreateRangos] = useMutation(CREATE_RANGO_MUTATION, {
    variables: {
      faccion: formState.faccion,
      raza: formState.raza,
      rango: formState.rango,
      caracteristicas: formState.caracteristicas,
      peligrosidad: formState.peligrosidad,
      representantes: formState.representantes,
      origen: formState.origen,
      especialidad: formState.especialidad,
      antiguedad: formState.antiguedad
    }
  });


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          CreateRangos();
        }}
      >
        <div className="flex flex-column mt3">
          
          <input
            className="mb2"
            value={formState.faccion}
            onChange={(e) =>
              setFormState({
                ...formState,
                faccion: e.target.value
              })
            }
            type="text"
            placeholder="nombre de faccion"
          />



          <input
            className="mb2"
            value={formState.raza}
            onChange={(e) =>
              setFormState({
                ...formState,
                raza: e.target.value
              })
            }
            type="text"
            placeholder="The raza for the link"
          />


<input
            className="mb2"
            value={formState.rango}
            onChange={(e) =>
              setFormState({
                ...formState,
                rango: e.target.value
              })
            }
            type="text"
            placeholder="The rango for the link"
          />



<input
            className="mb2"
            value={formState.caracteristicas}
            onChange={(e) =>
              setFormState({
                ...formState,
                caracteristicas: e.target.value
              })
            }
            type="text"
            placeholder="The raza for the link"
          />



<input
            className="mb2"
            value={formState.peligrosidad}
            onChange={(e) =>
              setFormState({
                ...formState,
                peligrosidad: e.target.value
              })
            }
            type="text"
            placeholder="The raza for the link"
          />



<input
            className="mb2"
            value={formState.representantes}
            onChange={(e) =>
              setFormState({
                ...formState,
                representantes: e.target.value
              })
            }
            type="text"
            placeholder="The raza for the link"
          />




<input
            className="mb2"
            value={formState.origen}
            onChange={(e) =>
              setFormState({
                ...formState,
                origen: e.target.value
              })
            }
            type="text"
            placeholder="The raza for the link"
          />




<input
            className="mb2"
            value={formState.especialidad}
            onChange={(e) =>
              setFormState({
                ...formState,
                especialidad: e.target.value
              })
            }
            type="text"
            placeholder="The raza for the link"
          />




<input
            className="mb2"
            value={formState.antiguedad}
            onChange={(e) =>
              setFormState({
                ...formState,
                antiguedad: e.target.value
              })
            }
            type="text"
            placeholder="The raza for the link"
          />




        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRangos;