

 let initialstate={
     list:[]
 }
//  const[list,setlist]=useState([])
 const reducer=(state=initialstate,action)=>{
     debugger
     switch(action.type)
     {
    case 'ADD_ITEM':
    const{id,data}=action.payload
    return{
        ...state,
        list:[
            ...state.list,
            {
                id:id,
                Name:data.Name,
                LastName:data.LastName
            }
        ]
    }
    
   case 'DELETE_ITEM':
     
      const del= state.list.filter((elem)=>elem.id !== action.payload)
  // debugger
          return{
              
              ...state,
              list:del
       
   }
   case "EDIT_ITEM":
    const eid = action.payload.data.id;
 const updatedUser = action.payload.data;
    // console.log(eid);
    const updatedUsers = state.list.map((user) => {
      if (user.id === eid) {
        return updatedUser;
      }
       else {
        return user;
      }
    })
    return {
      list: updatedUsers,
    };
  default:
    return state;
}
};
 
 export default reducer;
 