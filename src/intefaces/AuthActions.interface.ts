export interface AuthActions {
    signIn: (login: string, password: string) => void,
    getProfile: (login: string) => void,
    logout: () => void,
    cleanErrors: () => void
}