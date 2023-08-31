import {ReactNode} from "react";

export type AuthProviderProps = {
    children: ReactNode;
};
export type AuthContextValue = {
    user: string | null;
    signIn: (newUser: string, callback: () => void) => void;
    signOut: (callback: () => void) => void;
};