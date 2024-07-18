import {Outlet} from "react-router-dom";
import Menu from "../../components/menu/Menu.tsx";
import styles from './MainLayout.module.css';
import cn from 'classnames';

export default function MainLayout() {
    return (
        <div className={cn(styles['main-layout'])}>
            <Menu />
            <div className={cn(styles['main-wrapper'])}>
                <Outlet />
            </div>
        </div>
    )
}