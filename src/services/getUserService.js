import Api from "../services/getUserService"


export const getAllUser  = async () =>{
  
    try {
      
        const res  = await Api.get("/client/get-all")
        console.log(res.data)
    //    return res.data
 
    } catch (error) {
        
    console.log(error.message);
    throw error.response?.data || { message: "data not found" };

    }

}
