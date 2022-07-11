 export const ADD=(data)=>{
  
   return {
  
       type:'ADD_ITEM',
       payload:{
         id:new Date().getTime().toString(),
       data:data
      }
      }
}

export const DELETE=(id)=>{
 return{
     type:'DELETE_ITEM',
     payload:id
    }

}

 export const EDIT=(data)=>{
     return{
      
         type:'EDIT_ITEM',
         payload:{
           data:data
          }
        }
 }