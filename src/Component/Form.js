import { useState } from "react"

const formData ={
    userName : 'Sunil',
    Email : '',
    DOB : ''
}
const Form =()=>{

     const [name,setName] = useState()
     const [city,setCity] =useState()
     const getTextData =()=>{
        
     }
     const {username,email,dob} = formData
    const handleSubmit =(e)=>{
        e.preventDefault();

    }
     return(
         <div>
            <h2> Creating Fomr </h2>
            <div> 
                <form onSubmit={handleSubmit}>
                   userName : <input type="text" onChange={getTextData}/>
                  
                   <button > Submit</button>
                </form>
                 
            </div>
         </div>
     )
}
export default Form;