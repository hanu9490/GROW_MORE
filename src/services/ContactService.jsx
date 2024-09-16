import { API } from "../utils/API";

export const ContactService = {
  CreateContactUs: async (payload) => {
    try {
      const response = await API.post("contact", payload, {
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
  GetContactUs: async () => {
    try {
      const response = await API.get("getcontacteduserslist", {
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
