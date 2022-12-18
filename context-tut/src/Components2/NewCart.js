import React from 'react'

const NewCart = ({prod}) => {
  return (
    <div style={{display:"flex",flexDirection:"row"}} >
        <div style={obj}>
            <img src={prod.image} style={{height:"200px",width:"200px"}} />
           
        </div>
        <div>
        <p>{prod.title}</p>
        <h4>{prod.price}</h4>
        <button>Add TO Cart</button>
        </div>
    
    </div>
  )
}


const obj={
    display:"flex",
    justifyContext:"center",
    flexDirection:"row"
}

export default NewCart