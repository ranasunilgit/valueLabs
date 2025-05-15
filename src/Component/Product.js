
import React ,{ useState ,useEffect } from "react"
import axios from 'axios'
import List from './List'

const Product =()=>{
    const [data,setdata] = useState()
const getData = ()=>{
    const res = axios.get('https://dummyjson.com/products')
    res.then( (response)=>{
        console.log(response.data.products)
        setdata(response.data.products)
    })
}

 useEffect( ()=>{
    getData()
 },[]) 
    return(
         <div className="container"> 
              <h2> Showing Products</h2>
              <table>
                 <th> Product ID</th>
                 <th> Product Title</th>
                 <th> Image </th>
                  <tbody>
                     { data && data.map( (obj)=>
                            <List prod ={obj}/>
                            
                     )}
                     
                  </tbody>
              </table>
         </div>
    )
}

export default Product;
