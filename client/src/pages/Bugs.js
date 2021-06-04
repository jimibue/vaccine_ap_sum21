import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import BugForm from './BugForm'

const Bugs = () => {
    const history = useHistory()
    const [bugs, setBugs] = useState([])
    const [showThing, setShowThing] = useState(false)

    useEffect(()=>{
        getBugs()
    },[])

    const getBugs = async()=>{
        try {
            let res = await axios.get('/api/bugs')
            console.log(res)
            setBugs(res.data)
        } catch (err) {
            alert(err)
            console.log('err')
        }
    }
    const renderBugs = ()=> {
        return bugs.map( bug => {
            return (
                // using Link
                // <Link to={`/bugs/${bug.id}`}>
                // <div key={bug.id} style={styles.card}>
                //    <h1>{bug.name}</h1>
                // </div>
                // </Link>
                <div onClick={() => history.push(`/bugs/${bug.id}`)} key={bug.id} style={styles.card}>
                   <h1>{bug.name}</h1>
                </div>
            )
        })
    }
    return (
        <div style={{padding:'20px'}}>
            <div style={styles.pageHeader}>
               <h1>Bugs</h1>
               <div onClick={() => history.push(`/bugs/new`)}style={styles.btn}>New Bug</div>
            </div>
            <div style={styles.container}>
            {renderBugs()}
            </div>

            <div onClick={()=> setShowThing(!showThing)}>toggle thing</div>
            {showThing && <BugForm />}
        </div>
    )
} 

const styles = {
    pageHeader: {
        display:'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
    },
    btn: {
        border: '4px solid steelblue',
        width:'100px',
        padding:'20px',
        float: 'right'
    },
    container: {
       display: 'flex',
       justifyContent: 'space-between',
       flexWrap: 'wrap',
    
    },
    card: {
        width: '200px',
        height: '100px',
        border: '1px solid grey'
    }
}

export default Bugs