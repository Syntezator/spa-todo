import API from "./api";

export const taskAPI = {
  getAll: () => {
    return API.get('/tasks')
  },
  getById: (taskId: number) => {
    return API.get(`/task/${taskId}`)
  },
  create: (data:{
    number: string, 
    title:string, 
    description: string,    
    status:string, 
    pryority:string, 
    task:string, 
    projectId:string
  }) => {
    return API.post('/task/add', data)
  },
  delete: (taskId: number) => {
    return API.delete(`/task/delete/${taskId}`);
  }
}