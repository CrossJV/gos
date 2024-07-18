import UserProps from "./UserProps.interface.ts";

export interface AuthState {
    token: string | null,
    profile: UserProps | null,
    isAuth: boolean,
    errors: any
}