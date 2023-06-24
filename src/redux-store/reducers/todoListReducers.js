import { ADD_TODO, CHECK_TODO, DELETE_TODO, SAVE_TODO } from "../actionCreator/actionCrator"

let initialState = {
  todo: [
    {
      id: Math.random(),
      textInfo: "first Todo",
      completed: false,
      changed: false
    },
    {
      id: Math.random(),
      textInfo: "second Todo",
      completed: false,
      changed: false
    },
    {
      id: Math.random(),
      textInfo: "third Todo",
      completed: false,
      changed: false
    }
  ]
}

export const todoListReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload] 
      }
      case DELETE_TODO: 
        return{
          ...state,
          todo: [...action.payload]
        }
        case SAVE_TODO:
          return{
            ...state,
            todo: [...action.payload]
          }
          case CHECK_TODO:
            return{
              ...state,
              todo: [...action.payload]
            }
    default:
      return state
  }
}