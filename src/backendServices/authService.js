import Api from "../utils/api";

const signUpService = async (signupData) => {
  try {
    const res = await Api.post("/signup", signupData);

    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "signUp failed" };
  }
};

const loginService = async (loginData) => {
  try {
    const res = await Api.post("/login", loginData);

    return res.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

export { signUpService, loginService };
