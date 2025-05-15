
const List =(props)=>{
    
    const obj = props.prod
    
    return(
        
              <tr>
                 <td>{obj.id} </td>
                 <td>{obj.title}</td>
                 <td> <img src={obj.images} /></td>
              </tr>
        
    )
}

export default List;