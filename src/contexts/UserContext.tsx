import React, { FC, Dispatch, createContext, useContext, useState } from "react";

interface UserContextProps {
    isAuthenticated: boolean;
    setAuthenticated: Dispatch<React.SetStateAction<boolean>>;
}

const UserContext =
    createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        <UserContext.Provider value={{ isAuthenticated, setAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
};

export { UserProvider, useUser };
