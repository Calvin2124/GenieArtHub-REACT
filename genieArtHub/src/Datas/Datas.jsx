import React, { createContext, useContext, useEffect, useState } from "react";

const DatasContent = createContext();

export function DatasProvider({ children }) {
    const [datas, setDatas] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
    const fetchDatas = async () => {
        try {
            const req = await fetch('http://localhost:3000/api/products');
            const res = await req.json();
            setDatas(res); // Pas besoin de mettre res dans un tableau
        } catch (err) {
            console.error(err);
        }
    };

        fetchDatas();
    }, []);

    return (
    <DatasContent.Provider value={datas}>
        {children}
    </DatasContent.Provider>
    );
}

export function useDatas() {
    return useContext(DatasContent);
}
