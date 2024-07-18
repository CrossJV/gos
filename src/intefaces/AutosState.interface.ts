import AutoItemProps from "./AutoItemProps.interface.ts";

export interface AutosState {
    autos: AutoItemProps[],
    number: string,
    name: string,
    address: string,
    phone: string
}