import {Profile} from "./Profile.interface.ts";

export interface AuthState {
    token: string,
    profile: Profile,
    isAuth: boolean,
    errors: any
}