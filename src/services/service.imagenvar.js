import { Configuration, OpenAIApi } from "openai";
class ServiceVar {

  async getvar(data) {
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
    
      const imgdescripcion = data.d || '';
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
        const response=await openai.retrieveModel(`${data.d}`)
        // res.status(200).json({ result: completion.data.choices[0].text });
        
        let a =  ""
        a = "Nombre:"+response.data.id + "Id de creacion:"+ response.data.created + "Creada por:" + response.data.owned_by +"Es un:"+ response.data.object
        console.log(a)
        return {
            status: 200,
            result: a
        }
       



      } 
      
      
      
      catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          // res.status(error.response.status).json(error.response.data);
          return {
            status: error.response.data
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

export default new ServiceVar();