import Api from "../utils/api";

export  const signUpService = async (signupData) => {
  try {
    const res = await Api.post("/signup", signupData);
    console.log(res.data);
    
    return res.data;

  } catch (error) {
    throw error.response?.data || { message: "signUp failed" };
  }
};

 export const loginService = async (loginData) => {
  try {
    const res = await Api.post("/login", loginData);

    return res.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

 