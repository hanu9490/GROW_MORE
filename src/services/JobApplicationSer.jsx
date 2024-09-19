import { API } from "../utils/API";

export const JobApplicationService = {
  ApplyForJob: async (payload) => {
    try {
      const response = await API.post("applyjob", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  GetAppliedJobs: async () => {
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
  DeleteAppliedJobs: async (id) => {
    try {
      const response = await API.delete(`deletecontacteduser/${id}`, {
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
