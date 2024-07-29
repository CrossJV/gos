import { useState } from "react";
import AutoItemProps from "../../intefaces/AutoItemProps.interface.ts";
import styles from './AutoItem.module.css';
import cn from 'classnames';
import { useAutoStore } from "../../store/autos_zu.ts";

export default function AutoItem(data: AutoItemProps) {
    const [delAuto] = useAutoStore((state) => [
        state.deleteAuto
    ])
    const [showDel, setShowDel] = useState(false);

    return (
        <li className={cn(styles['auto-list-item'])} key={data.id}>
            <div className={cn(styles['auto-list-inner'])}>{data.index}</div>
            <div className={cn(styles['auto-list-inner'])}>{data.autoNumber}</div>
            <div className={cn(styles['auto-list-inner'])}>{data.name}</div>
            <div className={cn(styles['auto-list-inner'])}>{data.address}</div>
            <div className={cn(styles['auto-list-inner'])}>{data.phone}</div>
            <div className={cn(styles['auto-list-inner'])}>
                {data.img ? <img src={data.img} width={100} height={100} alt={'photo-img'}/> : !showDel ? <button className={cn(styles['delete-button'])} onClick={() => { setShowDel(true) }}>
                    Удалить
                </button> : 
                <div className={cn(styles['confirm-wrapper'])}>
                    <button onClick={() => { delAuto(data.id) }} className={cn(styles['accept-button'], styles['confirm-button'])}><img src="check.svg" width={20} /></button>
                    <button onClick={() => { setShowDel(false) }} className={cn(styles['delete-button'], styles['confirm-button'])}><img src="cancel.svg" width={20} /></button>
                </div>
                }
            </div>
        </li>
    )
}
