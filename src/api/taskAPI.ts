import API from "./api";

export const taskAPI = {
  getAll: (projectId:string | undefined) => {
    return API.get(`/tasks/${projectId}`)
  },
  getById: (taskId: number) => {
    return API.get(`/task/${taskId}`)
  },
  create: (data:{
    number: number, 
    title:string, 
    description: string,    
    status:string, 
    priority:string, 
    task:string, 
    projectId:string | undefined
  }) => {
    return API.post('/task/add', data)
  },
  delete: (taskId: number) => {
    return API.delete(`/task/delete/${taskId}`);
  }
}