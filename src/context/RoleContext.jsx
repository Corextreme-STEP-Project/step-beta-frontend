import React, { createContext, useContext, useState } from 'react'

const RoleContext = createContext();

export function RoleProvider({ children }) {
    const [role, setRole] = useState(null); // i.e ProjectOwner and MINMAP

    return (
        <RoleContext.Provider value={{ role, setRole }}>
            {children}
        </RoleContext.Provider>
    );
}

export function useRole() {
    return useContext(RoleContext);
}