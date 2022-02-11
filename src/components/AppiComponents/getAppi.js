export const getAppi = async(categoria)=>{

    const url=`https://www.etnassoft.com/api/v1/get/?category=${encodeURI (categoria)}&results_range=0,10`
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    
    
    
    const libros=data.map(info =>{
      return{
        id: info.ID,
        title: info.title,
        autor:info.author,
        url: info.cover,
        description:info.content,
      }
    })
    return libros;
      
    }