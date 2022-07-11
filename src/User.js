import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link ,useLocation, useParams } from 'react-router-dom'
import { EDIT  } from './Action/action'


function User() {
    const location = useLocation()
    let obj =location.state.elem
    const[inputData,setinputData]=useState({Name:obj.Name,LastName:obj.LastName})
    const navigate=useNavigate()
    const dispatch=useDispatch()
  
     const paramsid=useParams().id
     const list=useSelector((state)=>state.reducer.list)
    // console.log(list.reducer)

   useEffect(()=>{
    const update=list.find((elem)=>elem.id===paramsid)
    console.log(update)
    setinputData(update)
  },[list,paramsid])

   const update=()=>{
     debugger
     dispatch(EDIT(inputData))
   }
    
  return (

  <center>

      <input type='text' placeholder="Name" value={inputData.Name} onChange={(e)=>setinputData({...inputData, Name:e.target.value})}></input><br></br><br></br>
      <input type='text' placeholder="LastName" value={inputData.LastName} onChange={(e)=>setinputData({...inputData, LastName:e.target.value})}></input><br></br><br></br>
    <Link to='/'onClick={update}>UPDATE</Link>
    <button onClick={()=>navigate('/')  } >Cancel</button>
   </center>

  )
}

export default User