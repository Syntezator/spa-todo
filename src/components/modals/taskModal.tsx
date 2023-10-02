import React, { FC, useEffect, useState } from 'react';
import { taskAPI } from '../../api/taskAPI';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addComments, setComments } from '../../store/actions';
import {RootState} from "../../store/reducers";
import { commentsAPI } from '../../api/commentsAPI';

interface Task {
  id: number;
  number:number;
  title: string;
  description: string;
  start:string;
  timeInProgress:string;
  timeEnd:string;
  priority:string;
  status:string;
  files:object;
  subtasks:object;
  comments:object;
  projectId:number;
}

interface Comment {
  title: string;
  taskId:number
}

interface addComment {
  title: string;
  taskId:number
}

type TaskModalProps = {
  task:Task
};

export const TaskModal: FC<TaskModalProps> = ({task}) => {
  
  const [commentTitle, setCommentTitle] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.commentReducer.comments) || [];

  useEffect(() => {
    (async () => {
      try {      
        const response = await commentsAPI.getAll(task.id);
        dispatch(setComments(response.data)); 
      } catch (error) {
        console.error('error');
      }
    })();
  }, []);
  
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await taskAPI.getById(taskId);
  //       setTask(response.data); 
  //     } catch (error) {
  //       console.error('error');
  //     }
  //   })();
  // }, []);
  const taskId= task.id;
  const addComment = () => {
    commentsAPI.create({commentTitle, taskId}).then(response => {
      dispatch(addComments(response.data));
    });    
  }

  return (
        <div className='taskModal'>
          {task ? (
            <div>
              <div className='title'>{task.title} <span className='id'>#{task.number}</span></div>
                <textarea className='description' placeholder='Описание задачи'>{task.description}</textarea>
                <div className='details'>
                  <div className='timeStart'>Дата создания <strong>{task.start}</strong></div>
                  <div className='timeInProgress'>Время в работе <strong>--</strong></div>
                  <div className='timeEnd'>Дата окончания <strong>--</strong></div>
                  <div className='pryority'>Приоритет <strong>{task.priority}</strong></div>
                  <div className='status'>Текущий статус <strong>{task.status}</strong></div>           
                </div>
                <div className='row align-items-center'>
                  <div className='col-6'>
                    <div className='files'>Choose a file or drag here</div>
                  </div>
                  <div className='col-6 text-right'>
                    <div className='subtasks'><button>Добавить подзадачу</button></div>
                  </div>
                </div>
                <div>
                {comments.map((comment: Comment) => (
                    <p>{comment.title}</p>
                ))}
                  <textarea className='comments'placeholder='Комментарии' value={commentTitle} onChange={(e) => {setCommentTitle(e.target.value)}}></textarea>
                  <button onClick={addComment}>Добавить комментарий</button>
                </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

  );
};

