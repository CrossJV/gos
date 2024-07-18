import styles from './AutoList.module.css';
import cn from 'classnames';
import AutoItemProps from "../../intefaces/AutoItemProps.interface.ts";
import AutoItem from "../auto/AutoItem.tsx";
import ListHeader from "../listHeader/ListHeader.tsx";
import {useAutoStore} from "../../store/autos_zu.ts";
import {useEffect} from "react";

const headers = ['№', 'Номер', 'Имя', 'Адрес', 'Телефон', 'add'];

export default function AutoList() {
    const [autos, getAutos, deleteAuto] = useAutoStore((state) => [
        state.autos,
        state.getAutos,
        state.deleteAuto
    ]);

    useEffect(() => {
        getAutos();
    }, []);

    console.log(autos);
    return (
        <div className={cn(styles['list-wrapper'])}>
            <ListHeader names = {headers}/>
            <ul className={cn(styles['auto-list'])}>
                {autos && autos.map((elem: AutoItemProps, index: number) => {
                    return (
                        <AutoItem key={elem.id}
                            index={index + 1}
                            id={elem.id}
                            autoNumber={elem.autoNumber}
                            name={elem.name}
                            address={elem.address}
                            phone={elem.phone}
                            handler={() => {deleteAuto(elem.id)}}
                        />
                    )
                })}
            </ul>
        </div>

    )
}