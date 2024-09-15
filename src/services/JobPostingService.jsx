import { LoginInstance as API } from "../utils/API";

export const JobService = {
  GetJob: async () => {
    try {
      const response = await API.get("getjoblist", {
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
  AddJob: async (payload) => {
    try {
      const response = await API.post("createjob", payload, {
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
  EditJob: async (payload) => {
    try {
      const response = await API.put(`editjob/${payload.id}`, payload, {
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
  DeleteJob: async (payload) => {
    try {
      const response = await API.delete(`deletejob/${payload?.payload?.id}`, {
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
