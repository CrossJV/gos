import AutoItemProps from "../../intefaces/AutoItemProps.interface.ts";
import AutoItem from "../auto/AutoItem.tsx";
import cn from "classnames";
import styles from "../autoList/AutoList.module.css";
import ListHeader from "../listHeader/ListHeader.tsx";
import {HeadersProps} from "../../intefaces/HeadersProps.ts";

const MOCKS: AutoItemProps[] = [
    {
        id: 1,
        autoNumber: 'В537КХ198',
        name: 'неизвестно (место 22)',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '1.png'
    },
    {
        id: 2,
        autoNumber: 'В103УХ90',
        name: 'Не зарегистрирован',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '2.png'
    },
    {
        id: 3,
        autoNumber: 'С552ХЕ98',
        name: 'Не зарегистрирован',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '3.png'
    },
    {
        id: 4,
        autoNumber: 'В103УХ98',
        name: 'неизвестно (место 25)',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '4.png'
    },
    {
        id: 5,
        autoNumber: 'У050КМ98',
        name: 'Светлана Добкович (место 11)',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '5.png'
    },
    {
        id: 6,
        autoNumber: 'У050КМ90',
        name: 'Не зарегистрирован',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '6.png'
    },
    {
        id: 7,
        autoNumber: 'В103УХ98',
        name: 'неизвестно (место 25)',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '7.png'
    },
    {
        id: 8,
        autoNumber: 'В103УХ98',
        name: 'неизвестно (место 25)',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '8.png'
    },
    {
        id: 9,
        autoNumber: 'К514УА198',
        name: 'Титов Игорь Светозарович (место 10)',
        address: 'Курчатова 6к4',
        phone: '+79998887766',
        img: '9.png'
    },
]

const headers: HeadersProps[] = [
                                    {LABEL: '№'},
                                    {KEY: '', LABEL: 'Номер'},
                                    {KEY: '', LABEL: 'Имя'},
                                    {KEY: '', LABEL: 'Адрес'},
                                    {KEY: '', LABEL: 'Телефон'},
                                    {LABEL: 'Фото'}
                                ];

export default function HistoryList() {
    return (
        <div className={cn(styles['list-wrapper'])}>
            <ListHeader names = {headers}/>
            <ul className={cn(styles['history-list'])}>
                {MOCKS.map((elem, index) => {
                    return (
                        <AutoItem key={elem.id}
                            index={index + 1}
                            id={elem.id}
                            autoNumber={elem.autoNumber}
                            name={elem.name}
                            address={elem.address}
                            phone={elem.phone}
                            img={elem.img}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
