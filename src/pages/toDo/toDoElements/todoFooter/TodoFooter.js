import { useDispatch, useSelector } from 'react-redux';
import css from './todoFooter.module.css'
import { checkTodoAC } from '../../../../redux-store/actionCreator/actionCrator';

const TodoFooter = () => {
    const { todo } = useSelector(state => state.todoListReducers);
    const dispatch = useDispatch()
    
    let arr2 = todo.filter((elm) => {
        return elm.checked === true
    })

    let arr = todo.filter((elm) => {
        return elm.checked !== true
    })
    
   const onClear = (arr) => {
    dispatch(checkTodoAC(arr))
   }


    return (
        <div className={css.footerWrapper}>
            <div className={css.blok1}>
                <span>{todo.length}</span> / <span>{arr2.length}</span>
            </div>
            <div className={css.blok2}>
                <button className={css.clear} onClick={() => {onClear(arr)}}>Clear</button>
            </div>
        </div>
    )
}

export default TodoFooter;