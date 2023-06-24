import { Outlet } from "react-router-dom";
import css from './Main.module.css'


function Main() {
    return(
        <div className={css.mainContener}>
            <Outlet />
        </div>
    )
}

export default Main;