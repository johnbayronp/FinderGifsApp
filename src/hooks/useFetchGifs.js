import {useState,useEffect} from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Permite recargar solo cuando la categoria cambie o un estado cambie 
    useEffect(() => {
        // setImages es una funcion que toma el primer parametro que llega y lo asigna 
        // .then(setImages) es igual a .then((res)=> setImages(res))
        getGifs(category)
            .then((res)=> { 
                setTimeout(()=>{
                    setState({
                        data: res,
                        loading: false
                    })
               },1000);
            })
    },[category]);

    return state;

}