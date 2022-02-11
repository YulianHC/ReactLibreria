import { useEffect, useState } from "react"; 
import { getAppi } from "../components/AppiComponents/getAppi";



export const useFetch = (categoria) => {

    const [State, setState] = useState({
        data:[],
        laoding:true
    });

    useEffect(()=>{
        getAppi(categoria)
        .then(info => {
            setState({
                data:info,
                laoding:false,
            })
        })
    },[categoria])

    
  return State;
}
