import API from "./api";

export const searchAPI = {
  getTasks: (taskId:number) => {
    return API.get(`/search/${taskId}`)
  }
}