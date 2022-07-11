import React, { useState } from 'react'
// import { Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {ADD,DELETE} from './Action/action'


function Home() {
const[inputData,setinputData]=useState({Name:"",LastName:""})
const dispatch=useDispatch()
//  debugger
const location=useLocation()
const list=useSelector((state)=>state.reducer.list);
// console.log(list)

const demo=()=>{
  //  debugger
  dispatch(ADD(inputData),
  setinputData({Name:"",LastName:""}))
}


  return (
   <center>
      <input type='text' placeholder="Name" value={inputData.Name} onChange={(e)=>setinputData({...inputData, Name:e.target.value})}></input><br></br><br></br>
      <input type='text' placeholder="LastName" value={inputData.LastName} onChange={(e)=>setinputData({...inputData, LastName:e.target.value})}></input><br></br><br></br>
      <button onClick={demo}>ADD</button>

      <table id="customers">
      <thead>
  <tr>
    <th>Name</th>
    <th>LastName</th>
  </tr>
     </thead>

  <tbody>
{
  list.map((elem)=>{

    return(
  <tr key={elem.id}>
  
    <td>{elem.Name}</td>
    <td>{elem.LastName}</td>
    <td><Link to={`./User${elem.id} `} state={{elem}} type='button'>EDIT</Link></td>
    <td><button onClick={()=>dispatch(DELETE(elem.id))}>DELETE</button></td>
 </tr>
    )
  })
}
</tbody>
  </table>




  
   </center>
   
  )
}

export default Home