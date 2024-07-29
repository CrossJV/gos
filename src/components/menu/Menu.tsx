import styles from './Menu.module.css';
import cn from 'classnames';
import {NavLink, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../store/auth_zu.ts";

export default function Menu() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('auth')!).state.profile.login;
    const logout = useAuthStore((state) => state.logout)

    return (
        <aside className={cn(styles['menu'])}>
            <div className={cn(styles['menu-header'])}>
                <h2 className={cn(styles['menu-user-name'])}>{user}</h2>
                <nav className={cn(styles['nav'])}>
                    <NavLink to={'/'} className={({isActive}) => cn(styles['nav-link'], {
                        [styles['nav-link-active']]: isActive
                    })}>
                        <img src={'history.svg'} width={25}/>
                        История
                    </NavLink>
                    <NavLink to={'/auto'} className={({isActive}) => cn(styles['nav-link'], {
                        [styles['nav-link-active']]: isActive
                    })}>
                        <img src={'car.svg'} width={25}/>
                        Список машин
                    </NavLink>
                </nav>
            </div>
            <button className={cn(styles['logout-button'])} onClick={() => {logout(); navigate('/auth');}}>
                <img src={'logout.svg'} width={25}/>
                выход
            </button>
        </aside>
    )
}
