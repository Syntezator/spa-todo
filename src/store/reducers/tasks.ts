import {SEARCH_TASKS, ADD_TASK, SET_TASKS, DELETE_TASK} from "../types";

export interface IAction {
  type: string;
  payload: any;
}

export interface ITask {
    rate: number;
    name: string;
    city: string;
    address: string;
    id: number;
}

interface ITasksState {
  tasks: ITask[],
  currentTask:ITask | null
}

const initialState:ITasksState = {
    tasks: [],
    currentTask: null
};


const taskReducer = (state = initialState, action: IAction) => {
    const {type, payload} = action;

    switch (type) {
        case SET_TASKS: {
            console.log(payload);
            return {
                ...state,
                tasks: payload
            }
        }
        case SEARCH_TASKS: {
            console.log(payload);
            return {
                ...state,
                results: payload
            }
        }
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        }
        case DELETE_TASK: {
          const updatedTasks = state.tasks.filter(task => task.id !== payload);
          return {
            ...state,
            tasks: updatedTasks
          };
        }
        default: {
            return state;
        }
    }
}

export default taskReducer;