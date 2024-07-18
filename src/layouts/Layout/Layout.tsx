import {Outlet, useNavigate} from "react-router-dom";
import styles from './Layout.module.css';
import cn from 'classnames';
import {useEffect} from "react";

export default function Layout() {
    const navigate = useNavigate();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('auth')!);

        if(data) {
            if(!data.state.isAuth) {
                navigate('/auth');
            }
        }

    }, []);

    return (
        <div className={cn(styles['app'])}>
            <Outlet />
        </div>
    )
}