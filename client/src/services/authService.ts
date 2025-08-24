import API from "../utils/api";

// ✅ Register User
export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  role: string;
}) => {
  try {
    const res = await API.post("/auth/register", data);
    return res.data;
  } catch (error: any) {
    throw error.response?.data || { msg: "Registration failed" };
  }
};

// ✅ Login User
export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const res = await API.post("/auth/login", data);
    // token ko localStorage me save kar lo
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  } catch (error: any) {
    throw error.response?.data || { msg: "Login failed" };
  }
};
