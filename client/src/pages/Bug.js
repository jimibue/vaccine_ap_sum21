import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';

// TWO ways to do this, I could pass the bug via react router
// Or axios call here

const Bug = () => {
    const [bug,setBug] = useState({})
    let { id } = useParams();
    const history = useHistory()
    
    useEffect(()=>{
        getBug()
    },[])

    const getBug = async()=>{
        try {
            let res = await axios.get(`/api/bugs/${id}`)
            console.log(res)
            setBug(res.data)
        } catch (err) {
            alert(err)
            console.log('err')
        }
    } 
    return (
        <div style={styles.container}>
            <div style={styles.header}>
               <h1>{bug.name}</h1>
               <div style={styles.btnContainer}>
                   <div>delete</div>
                   <div onClick={()=> history.push(`/bugs/edit/${id}`)}>update</div>
               </div>
            </div>
            <h1>Vaccines</h1>
            <p>ToDo list vaccines</p>
        </div>
    )
} 
const styles = {
    container: {
      padding:'20px'
    },
    btnContainer:{
        display:'flex',
    },
    header: {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background:'lightgrey',
        padding:'10px'

    }
}

export default Bug