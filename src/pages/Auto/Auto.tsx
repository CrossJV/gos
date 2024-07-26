import { useEffect } from "react";
import { HeadersProps } from "../../intefaces/HeadersProps.ts";
import { useAutoStore } from "../../store/autos_zu.ts";
import List from "../../components/list/List.tsx";

const headers: HeadersProps[] = [
    {LABEL: '№'},
    {KEY: 'autoNumber', LABEL: 'Номер'},
    {KEY: 'name', LABEL: 'Имя'},
    {KEY: 'address', LABEL: 'Адрес'},
    {KEY: 'phone', LABEL: 'Телефон'},
    {LABEL: 'add'}
];

export default function Auto() {
    const [autos, getAutos, deleteAuto] = useAutoStore((state) => [
        state.autos,
        state.getAutos,
        state.deleteAuto
    ]);

    let auto_data
    useEffect(() => {
        getAutos();
    }, []);
    
    return (
        <>
            <List headers={headers} items={auto_data = autos.map(auto => {
            return {
                ...auto,
                handler: () => { deleteAuto(auto.id) }
            }
            })} />
        </>
    )
}
