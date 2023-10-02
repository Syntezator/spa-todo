import {SET_COMMENTS, ADD_COMMENTS} from "../types";

export interface IAction {
  type: string;
  payload: any;
}

export interface IComment {
   
}

const initialState = {
    comments: [],
    currentTusk: {}
};


const commentReducer = (state = initialState, action: IAction) => {
    const {type, payload} = action;

    switch (type) {
        case SET_COMMENTS: {
            console.log(payload);
            return {
                ...state,
                comments: payload
            }
        }
        case ADD_COMMENTS: {
            return {
                ...state,
                comments: [...state.comments, payload]
            }
        }
        // case DELETE_TASK: {
        //   const updatedTasks = state.tasks.filter(task => task.taskId !== payload.taskId);
        //   return {
        //     ...state,
        //     tasks: updatedTasks
        //   };
        // }
        default: {
            return state;
        }
    }
}

export default commentReducer;