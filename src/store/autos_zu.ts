import {create} from "zustand";
import AutoItemProps from "../intefaces/AutoItemProps.interface.ts";
import {AutosState} from "../intefaces/AutosState.interface.ts";
import {AutosActions} from "../intefaces/AutosActions.inteface.ts";

export const useAutoStore = create<AutosState & AutosActions>((set) => ({
    autos: [],
    number: '',
    name: '',
    address: '',
    phone: '',
    setNumber: (autoNumber) => {set(() => ({ number: autoNumber }))},
    setName: (name) => {set(() => ({ name: name }))},
    setAddress: (address) => {set(() => ({ address: address }))},
    setPhone: (phone) => {set(() => ({ phone: phone }))},
    getAutos: () => {
        const autos = JSON.parse(localStorage.getItem('auth')!).state.profile.autos;

        set(() => ({
            autos: autos
        }))
    },
    addAuto: (autoNumber: string, name: string, address: string, phone: string) => {
        const data = JSON.parse(localStorage.getItem('auth')!);

        data.state.profile.autos = [...data.state.profile.autos, {
            id: data.state.profile.autos.length + 1,
            autoNumber: autoNumber,
            name: name,
            address: address,
            phone: phone
        }];

        localStorage.setItem('auth', JSON.stringify(data));
    },
    deleteAuto: (id: number) => {
        const data = JSON.parse(localStorage.getItem('auth')!);

        data.state.profile.autos = data.state.profile.autos.filter((elem : AutoItemProps) => {
            return elem.id != id
        })

        localStorage.setItem('auth', JSON.stringify(data));
        set(() => ({
            autos: data.state.profile.autos
        }))
    }
}))