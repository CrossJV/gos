import styles from './ListHeader.module.css';
import cn from "classnames";
import {useNavigate} from "react-router-dom";

export default function ListHeader(names) {
    const navigate = useNavigate();

    return (
        <div className={cn(styles['list-header'])}>
            {names.names && names.names.map(name => {
                    return  name !== 'add' ? <div className={cn(styles['list-header-inner'])}><b>{name}</b></div> :
                        <div className={cn(styles['list-header-inner'])}>
                            <button onClick={() => {
                                navigate('/add')
                            }} className={cn(styles['add-button'])}>
                                Добавить
                            </button>
                        </div>
            })
            }
        </div>
    )
}