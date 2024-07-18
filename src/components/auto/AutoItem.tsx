import AutoItemProps from "../../intefaces/AutoItemProps.interface.ts";
import styles from './AutoItem.module.css';
import cn from 'classnames';

export default function AutoItem(data: AutoItemProps) {
    return (
        <li className={cn(styles['auto-list-item'])} key={data.id}>
            <div className={cn(styles['auto-list-inner'])}>{data.index}</div>
            <div className={cn(styles['auto-list-inner'])}>{data.autoNumber}</div>
            <div className={cn(styles['auto-list-inner'])}>{data.name}</div>
            <div className={cn(styles['auto-list-inner'])}>{data.address}</div>
            <div className={cn(styles['auto-list-inner'])}>{data.phone}</div>
            <div className={cn(styles['auto-list-inner'])}>
                {data.img ? <img src={data.img} width={100} height={100} alt={'photo-img'}/> : <button className={cn(styles['delete-button'])} onClick={data.handler}>
                    Удалить
                </button>}
            </div>
        </li>
    )
}
