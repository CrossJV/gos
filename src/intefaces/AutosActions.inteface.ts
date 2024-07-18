export interface AutosActions {
    setNumber: (autoNumber: string) => void,
    setName: (name: string) => void,
    setAddress: (address: string) => void,
    setPhone: (phone: string) => void,
    getAutos: () => void,
    addAuto: (autoNumber: string, name: string, address: string, phone: string) => void,
    deleteAuto: (id: number) => void
}