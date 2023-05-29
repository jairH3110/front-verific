import { useState } from "react";
import ServiceImagen from "../services/service.imagenes"

export default function Imagenes() {
  const [descripcionInput, setdescripcionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await ServiceImagen.getimg({ d: descripcionInput});
      /*const response = await fetch("/text-davinci-003/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });*/

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setdescripcionInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
        <title>OpenAI Quickstart</title>
       

      <main >
        <h3>Generar imagenes</h3>
        <form onSubmit={onSubmit}>
        <h3>QUE QUIERES?</h3>
          <input
            type="text"
            name="descripcion input"
            placeholder="Enter an descipcion"
            value={descripcionInput}
            onChange={(e) => setdescripcionInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />

        </form>
      <div style={{
          textAlign: "center",
          maxWidth: "950px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "40px 25px",
          marginTop: "50px",
          color:"greenyellow"

        }} > <li >  <img src={result} alt="sdf"></img> </li></div>
      </main>
    </div>
  );
}