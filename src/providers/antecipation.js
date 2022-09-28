import { createContext, useContext, useState } from "react";
import api from "../services";

const AntecipationContext = createContext()

export const AntecipationProvider = ({children}) =>{
    const [data, setData] = useState({})

    const simulate = (data) => {
        api.post("", data).then(res => setData(res.data))
    }

    return <AntecipationContext.Provider value={{
        data, simulate
    }}>
        {children}
    </AntecipationContext.Provider>
}

export const useSimulator = () => useContext(AntecipationContext)
