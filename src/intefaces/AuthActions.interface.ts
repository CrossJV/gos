export interface AuthActions {
    signIn: (login: string, password: string) => void,
    getProfile: () => void,
    logout: () => void,
    cleanErrors: () => void
}