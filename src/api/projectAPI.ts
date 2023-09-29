import API from "./api";

export const projectAPI = {
  getAll: () => {
    return API.get('/project')
  },
  create: (data:{title:string, description: string}) => {
    return API.post('/project/add', data)
  },
  delete: (projectId: number) => {
    return API.delete(`/project/delete/${projectId}`);
  }
}