import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

export default function RequireAuth({ children }: {children: ReactNode}) {
    const data = JSON.parse(localStorage.getItem('auth')!);

    if(data) {
        if(data.state.isAuth) {
            return children;
        }
    }
    return <Navigate to='/auth' replace />
}