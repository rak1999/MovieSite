import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=1912a668&s=titanic";

const AppProvider = ({ children }) => {
    const [isLoading , setIsLoading] = useState(true);
    const [movie , setMovie] = useState([]);
    const [isError , setIsError] = useState({show:"false" , msg:""});
    const getMovies = async(url) => {

        try{
            const res = await fetch(url);
            const data = await res.json();
            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
            }
            else{
                setIsError({
                    show: true,
                    msg : data.error,
                });
            }
        }
        catch (error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getMovies(API_URL);
    },[])

    return <AppContext.Provider value={{isLoading , isError , movie }} >{children}</AppContext.Provider>
}

//Global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext); 
}

export {AppContext , AppProvider , useGlobalContext};