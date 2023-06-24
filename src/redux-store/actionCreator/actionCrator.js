
export  const ADD_TODO = "ADD_TODO";

export  const   addToDoAC = (newdate) => {
    return {
        type : ADD_TODO,
        payload: newdate
    }
}

export  const DELETE_TODO = "DELETE_TODO";

export  const   deleteTodoAC = (newdate) => {
    return {
        type : DELETE_TODO,
        payload: newdate
    }
}

export  const SAVE_TODO = "SAVE_TODO";

export  const   saveTodoAC = (newdate) => {
    return {
        type : SAVE_TODO,
        payload: newdate
    }
}

export  const CHECK_TODO = "CHECK_TODO";

export  const   checkTodoAC = (newdate) => {
    
    return {
        type : CHECK_TODO,
        payload: newdate
    }
}