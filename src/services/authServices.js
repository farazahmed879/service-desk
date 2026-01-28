import Api from "../utils/api";

export  const signUpService = async (signupData) => {
  try {
    const res = await Api.post("/signup", signupData);
    console.log(res.data);
    
    return res.data;

  } catch (error) {
    console.log(error.message);
    throw error.response?.data || { message: "signUp failed" };
  }
};

 export const loginService = async (loginData) => {
  try {
    const res = await Api.post("/login", loginData);

    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error.response?.data || { message: error.message };
  }
};

 
export const forgetPassword = async(forgetPasswordData)=>{
  try {
    
       const res = await  Api.post("/forget-password" , forgetPasswordData)
      return res.data  

    } catch (error) {
    console.log(error.message);
      throw error.response?.data  || {message:error.message}
         

  }
}
 
export const savePassword = async(savePasswordData)=>{
  try {
    
       const res = await  Api.post("/new-password" , savePasswordData)
      return res.data  

    } catch (error) {
    console.log(error.message);
      throw error.response?.data  || {message:error.message}
         

  }
}