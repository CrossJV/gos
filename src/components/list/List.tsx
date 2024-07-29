import styles from './List.module.css';
import cn from 'classnames';
import {useNavigate} from "react-router-dom";
import AutoItem from "../auto/AutoItem.tsx";
import AutoItemProps from "../../intefaces/AutoItemProps.interface.ts";
import {useEffect, useState} from "react";
import {HeadersProps} from "../../intefaces/HeadersProps.ts";

export default function List({ headers, items }) {
    const [sort, setSort] = useState({ keyToSort: '', direction: 'asc' });
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let found = [];

        if(searchTerm !== "") {
            items.forEach((obj) => {
                for(let item in obj) {
                    if (String(obj[item]).includes(searchTerm)) {
                        if(!found.includes(obj)) {
                            found.push(obj);
                        }
                    }
                };
            });
        } else {
            found = [...items];
        }

        setSearchResults([...found]);
    }, [items, searchTerm]);

    function handleChange(event) {
        setSearchTerm(event.target.value);
     };

    function handlerHeader(header: HeadersProps) {
        setSort({
            keyToSort: header.KEY,
            direction: header.KEY === sort.keyToSort ? sort.direction === 'asc' ? 'desc' : 'asc' : 'desc'
        })
    }

    function getSortedData<T>(dataToSort: T[]) {
        if(sort.direction === 'asc') {
            return dataToSort.sort((a, b) => (
                a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
            ))
        }

        return dataToSort.sort((a, b) => (
            a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
        ))
    }

    return (
        <div className={cn(styles['list-wrapper'])}>
            <input
                className={cn(styles['search-input'])}
                type="text"
                placeholder="Поиск"
                value={searchTerm}
                onChange={handleChange}
            />
            <div className={cn(styles['list-header'])}>
                {headers && headers.map(name => {
                    return name.LABEL !== 'add'
                        ?
                            <div onClick={() => {handlerHeader(name)}} className={cn(styles['list-header-inner'])}><b>{name.LABEL}</b></div>
                        :
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
            <ul>
                {searchResults && getSortedData(searchResults).map((item: AutoItemProps, index) => {
                    return (
                        <AutoItem key={item.id}
                                  index={index + 1}
                                  id={item.id}
                                  autoNumber={item.autoNumber}
                                  name={item.name}
                                  address={item.address}
                                  phone={item.phone}
                                  img={item.img ? item.img : undefined}
                                  handler={item.handler ? item.handler: undefined}
                        />
                    )
                })}
            </ul>
        </div>

    )
}