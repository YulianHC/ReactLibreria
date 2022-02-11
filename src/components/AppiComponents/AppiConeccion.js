

import { useFetch } from '../../hook/useFetch';
import { AppiContenedor } from './AppiContenedor';
//import { getAppi } from './getAppi';

export const AppiConeccion =  ({categoria}) => {

/* const [Informacion, setInformacion] = useState([])

 useEffect (()=>{
 getAppi(categoria).then(info=>{setInformacion(info)}) ;
},[categoria])  */
const {data,loading} = useFetch(categoria);

 

  return (
    
    <>
    <h3>{categoria}</h3>
{loading && <p>Cargando</p>}
<div>
  {

    data.map(info =>(
 <AppiContenedor
key={info.id}
{...info}
/>
    ))
  }
</div>

    </>

   
  )
};
