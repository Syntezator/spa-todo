import API from "./api";

export const commentsAPI = {
  getAll: (taskId:number) => {
    return API.get(`/comment/${taskId}`)
  },
  create: (data: {
    commentTitle: string,
    taskId: number
  }) => {
    const modifiedData = {
      title: data.commentTitle,
      taskId: data.taskId
    };
    return API.post(`/comment/add`, modifiedData);
  },
  // delete: (taskId: number) => {
  //   return API.delete(`/task/delete/${taskId}`);
  // }
}