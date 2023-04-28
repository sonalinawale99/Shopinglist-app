import React from 'react'
import { useState } from 'react'

const Shoppinglistapp = () => {

    const [state,setState]= useState({
        name:"",
        Qty:"",
       index:0
    })

    const[editMode, setEditMode]=useState(false);
    const[shoppingarray,setshoppingarray]=useState([]);

    const shoppinginput=(event)=>{
       // setState(event.target.value);
   setState({...state,[event.target.name]:event.target.value});
           // console.log({[event.target.name]:event.target.value});
   }

  const clickMe=()=>{
    shoppingarray.push(state);
    setshoppingarray([...shoppingarray]);
  }
  const clear=(index)=>{
    shoppingarray.splice(index,1);
    setshoppingarray([...shoppingarray]);
  }

 const populateItem =(ele,i)=>{
  {
    setState({
      name:ele.name,
      Qty:ele.Qty,
      index:i
    })
    setEditMode(true);
  }
 }
 
 const editdata=()=>{
//console.log(shoppingarray[state.index]);
    shoppingarray[state.index]=state;
 // console.log(state.index);
   setshoppingarray([...shoppingarray]);
 
  }


  return (
    <div className={"container"} style={{ width:"1000px",backgroundColor:"pink",marginTop:"50px"}}>
         
 <h3 className={"col-md-12"} style={{marginTop:"40px",padding:"15px",fontFamily: "Georgia"}}> <b>My shoping-list App</b>  </h3>

 <div className={"row"}>
  
   <div className={"col-md-6"}>
    <input type={"text"} onChange={shoppinginput} name={"name"} value={state.name} placeholder={"shopping list name"} className={'form-control'} style={{marginTop:"30px"}}></input>
   
    
    <input type={"number"}onChange={shoppinginput} placeholder={"Quantity"} name={"Qty"} value={state.Qty}  className={'form-control'} style={{marginTop:"20px"}}></input>
  
   {
    editMode ?
    <button value={state} onClick={editdata} className={"btn btn-success"} style={{marginTop:"20px",backgroundColor:"ActiveCaption"}}> Edit Todo</button>
  : <button onClick={clickMe} className={"btn btn-success"} style={{marginTop:"20px",backgroundColor:"ActiveCaption"}}> Add Todo</button>
   }

   </div>
  
   <div className={"col-md-6"} style={{marginTop:"20px"}}>
   <ul class="list-group">
   <span>
   {
    shoppingarray.map((ele,index)=>(

    <li key={index}  className={"list-group-item"} style={{backgroundColor:"indigo",border:"solid 1px black",marginTop:"10px"}}> 
    
        <h3 type={"text"} style={{color:"white", fontFamily:"cursive",fontSize:"25px"}}>{ele.name}{ele.Qty}</h3>
       
        <button onClick={()=>clear(index)} className={"btn btn-danger"} style={{marginInline:"30px", marginLeft:"10px"}}>Clear</button>
        <button onClick={()=>populateItem(ele,index)} className={"btn btn-primary"} >Edit</button>
        
     </li>
      
    ))
    }
</span> 
 </ul>
   
   </div>
   </div>
    </div>
  )
}
export default Shoppinglistapp;


