import ToDoAdd from './toDoElements/toDoAddElem/ToDoAdd';
import ToDoBody from './toDoElements/toDoBody/ToDoBody';
import TodoFooter from './toDoElements/todoFooter/TodoFooter';
import ToDoHeader from './toDoElements/todoHeader/ToDoHeader';
import css from './toDoList.module.css'


const ToDoList = () => {
    

    return(
        <div className={css.toDoWrapper}>
            <ToDoHeader />
            <ToDoAdd />
            <ToDoBody />
            <TodoFooter />
        </div>
    )
}

export default ToDoList;