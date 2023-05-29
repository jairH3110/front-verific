import { useState } from "react";

import ServiceDavinci003 from "../services/service.davinci-003"

export default function Textdavinci003() {
  const [objetoInput, setobjetoInput] = useState("");
  const [wordInput, setwordInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await ServiceDavinci003.getDaVinci({ objeto: objetoInput, word: wordInput  });
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
      setobjetoInput("");
      setwordInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />

      <main >
        <h3>tipo de objeto</h3>
        <form onSubmit={onSubmit}>
        <h3>tipo de objeto</h3>
          <input
            type="text"
            name="objeto"
            placeholder="Enter an object"
            value={objetoInput}
            onChange={(e) => setobjetoInput(e.target.value)}
          />
          <h3>palabra relacionado</h3>
          <input
            type="text"
            name="word"
            placeholder="Enter an word"
            value={wordInput}
            onChange={(e) => setwordInput(e.target.value)}
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

        }} > <li >  {result} </li></div>
      </main>
    </div>
  );
}