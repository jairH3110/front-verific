import { Configuration, OpenAIApi } from "openai";

class ServiceMod {

  async getlol(dato) {
    const configuration = new Configuration({
        apiKey: "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",
      });
    
    
      const openai = new OpenAIApi(configuration);
    if (!configuration.apiKey) {
        /*
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        */
        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const imgdescripcion = dato.d || '';
      if (imgdescripcion.trim().length === 0) {
        /*
        res.status(400).json({
          error: {
            message: "Please enter a valid animal",
          }
        });
        */
        return {
            status:400,
            error: {
                message: "Please enter a valid animal",
            }
        };
      }

    
      try {
        const response=await openai.createModeration({
            input: `${dato.d}`,
         
        })
        console.log("hola")
      let a =""
      a = response.data.result
        console.log(a)
        console.log("hola2")
        // res.status(200).json({ result: completion.dato.choices[0].text });
        return {
            status: 200,
            result: response.data.results[0]
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.dato);
          // res.status(error.response.status).json(error.response.dato);
          return {
            status: error.response.dato
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          /*
          res.status(500).json({
            error: {
              message: 'An error occurred during your request.',
            }
          });
          */
         return {
            status: 500,
            error: {
                message: 'An error occurred during your request.',
            }
         }
        }
      }
  }

    
}

export default new ServiceMod();