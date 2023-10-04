import React from 'react'
import './Home.css'
import data from './data.json'



function Home() {
  
  return (
    
   <div className='card' >




       {

        data&&data.map(data=>{
          return(<>
          
          <div className='cards' key={data.id}>
            <div className='car'>
            <img className='car' alt='car' src={data.img}></img>
        </div>
        <div className='text'>
          <div className='details'>
           <p className='para'><h4>{data.caption}</h4>
           {data.people}<br/>
           {data.milage}<br/><br/>
           {data.rent}
           </p>
           <div className='para'>
            <p><br/><br/><br/><br/>{data.engine}<br/>
            {data.type}
            </p>
            <button className='btn'>Read more</button>
           </div>
          </div>
            </div>
            </div>
            
          </>)
        })
        
       }
     </div>
     
   
    
    
    )
}

export default Home