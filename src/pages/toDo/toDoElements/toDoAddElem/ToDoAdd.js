import { useState } from 'react';
import css from './todoAdd.module.css'
import { addToDoAC } from '../../../../redux-store/actionCreator/actionCrator';
import { useDispatch } from 'react-redux';

const ToDoAdd = () => {
  const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const changeInput = (evt) => {
         setValue(evt.target.value)
    }

    const addNewtodo = (value) => {
        let newTodo =  {
                id: Math.random(),
                textInfo: value,
                completed: false,
                changed: false
            }
        dispatch(addToDoAC(newTodo))
        setValue('')
    }

    return (
        <div className={css.addTodoListContener}>
            <div className={css.addTodoFlex}>
                <input placeholder='' className={css.addInput}  onChange={(evt) => changeInput(evt)} value={value}/>
                <button className={css.addButton} onClick={() => addNewtodo(value)}>Add</button>
            </div>
        </div>
    )
}

export default ToDoAdd;