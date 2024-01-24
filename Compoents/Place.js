import React from 'react'

const  place = ({temp , city,check}) => {
 
  
  return (
    <>
    
    <div className='info'>
    
    
    
    {temp}
    {typeof city === "string" &&(
      <>
      {city.toUpperCase()}
      </>
    )}
      
    </div>
     
     </>
  )
}

export default place
