import { NavLink } from 'react-router-dom'
import Main from '../Main/Main';
import css from "./Loyaut.module.css"

const setActive = ({isActive}) => isActive ? "active-link" : "";

function Loyout() {

    return (
        <>
            <header className={css.headerWrapper}> 
                <NavLink to='/todolist'  className={setActive}>ToDoList</NavLink>
                <NavLink to='/home'  className={setActive}>Home</NavLink>
                <NavLink to='/about'  className={setActive}>About</NavLink>
                <NavLink to='/blog' className={setActive}>Blog</NavLink>
            </header>

            <Main />

            <footer className={css.footerWrapper}>Footer</footer>   
        </>
    )

}

export default Loyout