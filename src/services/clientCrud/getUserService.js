import Api from "@/utils/api"


export const getAllUser  = async () =>{
  
    try {
      
        const res  = await Api.get("/client/get-all")
       return res.data
 
    } catch (error) {
        
    console.log(error.message);
    throw error.response?.data || { message: "data not found" };

    }

}



export const rigisterUser= async (data)=>{
    try{
       const res= await Api.post("/client/create" , data)
     
        return res.data
     
    }catch(error){

    console.log(error.message)
      

    }
}