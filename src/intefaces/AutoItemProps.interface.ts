export default interface AutoItemProps {
    id: number,
    autoNumber: string,
    name: string,
    address: string,
    phone: string,
    handler?: () => void,
    index?: number,
    img?: string
}

// [
//     {
//         "id": 1,
//         "autoNumber": "А231БП333",
//         "name": "Пупкин",
//         "address": "Тореза 22",
//         "phone": "89993332112"
//     },
//     {
//         "id": 2,
//         "autoNumber": "А231KП312",
//         "name": "Пупкин1",
//         "address": "Тореза 22",
//         "phone": "89323432112"
//     },
//     {
//         "id": 3,
//         "autoNumber": "А231ЖУ831",
//         "name": "Пупкин2",
//         "address": "Тореза 22",
//         "phone": "89993512112"
//     },
//     {
//         "id": 4,
//         "autoNumber": "А231АЕ463",
//         "name": "Пупкин3",
//         "address": "Тореза 22",
//         "phone": "89283337812"
//     }
// ]