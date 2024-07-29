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

useAutoStore.getState().getAutos();

export default function Auto() {
    console.log('rerender AUTO')
    const [autos] = useAutoStore((state) => [
        state.autos
    ])

    return (
        <>
            {<List headers={headers} items={autos} />}
        </>
    )
}
