import cn from 'classnames';
import styles from './Auth.module.css';
import { useNavigate } from 'react-router-dom';
import {BaseSyntheticEvent} from "react";
import {useAuthStore} from "../../store/auth_zu.ts";

export default function Auth() {
    const navigate = useNavigate();
    const [signIn, getProfile, clearError, isAuth, errors] = useAuthStore((state) => [
        state.signIn,
        state.getProfile,
        state.cleanErrors,
        state.isAuth,
        state.errors
    ]);

    const formHandler = async (evt: BaseSyntheticEvent) => {
        evt.preventDefault();
        const login = evt.currentTarget.elements[0].value;
        const password = evt.currentTarget.elements[1].value;

        await signIn(login, password);
        if(!errors) {
            await getProfile(login);

            navigate('/')
        }
    }

    return (
        <div className={cn(styles['auth-wrapper'])}>
            <img className={cn(styles['auth-img'])} src={'logod.svg'} width={200} height={67} alt={'proeye-logo'}/>
            <form className={cn(styles['auth-form'])} id="signin" onSubmit={formHandler}>
                <h1 className={cn(styles['auth-form-head'])} id="signheader">Вход в систему</h1>
                <label className={cn(styles['auth-form-label'])}>Логин
                    <input className={cn(styles['auth-form-input'])}
                           onChange={clearError}
                           autoComplete="off"
                           placeholder="Имя пользователя"/>
                </label>
                <label className={cn(styles['auth-form-label'])}>Пароль
                    <input className={cn(styles['auth-form-input'])}
                           onChange={clearError}
                           autoComplete="off"
                           type="password"
                           placeholder="Пароль"/>
                </label>
                {errors && <div className={cn(styles['error-message'])}>{errors.message}</div>}
                <button className={cn(styles['auth-form-submit'])}>Войти</button>
            </form>
        </div>
    )
}
