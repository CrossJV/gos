import cn from "classnames";
import styles from './AutoAddForm.module.css'
import {BaseSyntheticEvent} from "react";
import {useNavigate} from "react-router-dom";
import {useAutoStore} from "../../store/autos_zu.ts";

const prefixNumber = (str: string) => {
    if (str === "7") {
        return "7 (";
    }
    if (str === "8") {
        return "8 (";
    }
    if (str === "9") {
        return "7 (9";
    }
    return "7 (";
};

function phoneMask(event)
{
    const value = event.target.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    if (event.target.value.includes("+8") || event.target.value[0] === "8") {
        result = "";
    } else {
        result = "+";
    }

    for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
            case 0:
                result += prefixNumber(value[i]);
                continue;
            case 4:
                result += ") ";
                break;
            case 7:
                result += "-";
                break;
            case 9:
                result += "-";
                break;
            default:
                break;
        }
        result += value[i];
    }

    event.target.value = result;
}

export default function AutoAddForm() {
    const navigate = useNavigate();
    const [
        number,
        name,
        address,
        phone,
        setNumber,
        setName,
        setAddress,
        setPhone,
        addAuto
    ] = useAutoStore((state) => [
            state.number,
            state.name,
            state.address,
            state.phone,
            state.setNumber,
            state.setName,
            state.setAddress,
            state.setPhone,
            state.addAuto
    ])
    const formHandler = (evt: BaseSyntheticEvent) => {
        evt.preventDefault();
        addAuto(number, name, address, phone)
        navigate('/auto');
    }

    return (
        <form className={cn(styles['auto-form'])} onSubmit={formHandler}>
            <label className={cn(styles['auto-form-label'])}>Номер автомобиля
                <input className={cn(styles['auto-form-input'])}
                       onChange={(e) => setNumber(e.target.value)}
                       autoComplete="off"
                       placeholder="ХNNNXXNNN"
                       pattern={'[А-Я]\\d{3}[А-Я]{2}\\d{3}'}
                />
            </label>
            <label className={cn(styles['auto-form-label'])}>ФИО
                <input className={cn(styles['auto-form-input'])}
                       onChange={(e) => setName(e.target.value)}
                       autoComplete="off"
                       placeholder="ФИО"/>
            </label>
            <label className={cn(styles['auto-form-label'])}>Адрес
                <input className={cn(styles['auto-form-input'])}
                       onChange={(e) => setAddress(e.target.value)}
                       autoComplete="off"
                       placeholder="Адрес"/>
            </label>
            <label className={cn(styles['auto-form-label'])}>Телефон
                <input className={cn(styles['auto-form-input'])}
                       onChange={(e) => setPhone(e.target.value)}
                       autoComplete="off"
                       type={'tel'}
                       onInput={phoneMask}
                       placeholder="+7 (___) ___-__-__"/>
            </label>
            <button className={cn(styles['auto-form-submit'])} type={'submit'}>Добавить</button>
        </form>
    )
}
