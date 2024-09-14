import { LoginInstance as API } from "../utils/API";

export const LoginService = {
  Login: async (payload) => {
    try {
      const response = await API.post("login", payload, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
