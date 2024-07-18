import {create} from "zustand";
import {AuthState} from "../intefaces/AuthState.interface.ts";
import {AuthActions} from "../intefaces/AuthActions.interface.ts";
import {persist} from "zustand/middleware";
import UserProps from "../intefaces/UserProps.interface.ts";

const data = [
    {
        login:"CrossJV",
        password:"123456",
        isLogined:false,
        autos:[{id:1,autoNumber:"А231БП333",name:"Пупкин",address:"Тореза 22",phone:"89993332112"}]},
    {
        login:"metwisom",
        password:"09876",
        isLogined:false,
        autos:[]}
]
export const useAuthStore = create(persist<AuthState & AuthActions>((set) => ({
        token: null,
        profile: null,
        isAuth: false,
        errors: null,
        signIn: async (login: string, password: string) => {
            const user = data.filter((user: UserProps) => user.login === login && user.password === password);

            if(user) {
                const token = login + password;
                set((state) => ({
                    token,
                    isAuth: !!token
                }))
            }
        },
        getProfile: async (login: string) => {
            const profile = data.filter((user: UserProps) => user.login === login);

            set(() => ({
                profile: profile
            }))
        },
        logout: () => set(() => ({token: null, profile: null, isAuth: false}))
    }),
    {
        name: 'auth'
    }
))

