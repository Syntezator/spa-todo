import { ADD_COMMENTS, ADD_TASK, DELETE_TASK, SET_COMMENTS, SET_TASKS } from "../types";

export const setTasks = (payload: any) => ({
  type: SET_TASKS,
  payload,
});

export const addTask = (payload: any) => ({
  type: ADD_TASK,
  payload,
});

export const deleteTask = (payload: any) => ({
  type: DELETE_TASK,
  payload,
});

export const addComments = (payload: any) => ({
  type: ADD_COMMENTS,
  payload,
});

export const setComments = (payload: any) => ({
  type: SET_COMMENTS,
  payload,
});