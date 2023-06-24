import { useState } from 'react';
import css from './ToDoBody.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { checkTodoAC, deleteTodoAC, saveTodoAC } from '../../../../redux-store/actionCreator/actionCrator';


const ToDoBody = () => {
  const dispatch = useDispatch()

  const { todo } = useSelector(state => state.todoListReducers);
  console.log(todo);

  function deleteTodo(id) {
    let NewText = [...todo].filter(x => x.id !== id);
    dispatch(deleteTodoAC(NewText))
  }

  const [edit, setEdit] = useState("");
  const [newValue, setNewValue] = useState("");

  function editTodo(id, textInfo) {
    setEdit(id)
    setNewValue(textInfo)
  }

  function saveTodoEditValue(id) {
    let newArr = [...todo].map(elm => {
      if (elm.id === id) {
        elm.textInfo = newValue
      }
      return elm
    })

    dispatch(saveTodoAC(newArr))
    setEdit("")
  }

  const onchecked = (e, id) => {
    let newcheckedArr = [...todo].map(elm => {
      if (elm.id === id) {
        let x = e.target.checked;
        elm.checked = x
      }
      return elm
    })
        dispatch(checkTodoAC(newcheckedArr))
  }
  

  return (
    <div className={css.todoWrapper}>
      {
        todo.map(elm => (
          <div key={elm.id} className={css.elementContener}>
            {
              edit === elm.id ?
                <div className={css.divInput}>
                  <input className={css.textinfoInput} onChange={(e) => setNewValue(e.target.value)} value={newValue} />
                </div> :
                <div className={css.textInfo} onClick={() => editTodo(elm.id, elm.textInfo)}>{elm.textInfo}</div>
            }
            {
              edit === elm.id ?
                <div className={css.btnAll} >
                  <button onClick={() => saveTodoEditValue(elm.id)} className={css.saveBtn}>Save</button>
                </div> :
                <div className={css.btnAll}>
                  <button className={css.delete} onClick={() => deleteTodo(elm.id)}>Delete</button>
                  <button className={css.edit} onClick={() => editTodo(elm.id, elm.textInfo)}>Edit</button>
                  <input type="checkbox" name="vehicle1" className={css.checkbox} onChange={(evt) => { onchecked(evt, elm.id) }} />
                </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default ToDoBody;