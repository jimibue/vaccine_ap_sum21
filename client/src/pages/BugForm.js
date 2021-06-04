import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams, useLocation, useRouteMatch, useHistory } from 'react-router-dom'

const BugForm = () => {
    const {id} = useParams()
    const history = useHistory()
    
    const location = useLocation()
    const [name, setName] = useState(location.name ? location.name : '')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
        if(id){
            let res = await axios.put(`/api/bugs/${id}`, {name:name})
            history.push(`/bugs/${res.data.id}`)
        } else {
            let res = await axios.post(`/api/bugs`, {name:name})
            history.push(`/bugs/${res.data.id}`)
        }
      } catch(e){
          console.log(e)
      }
    }

    return (
        <div>
            <h1>BugForm</h1>
            {id ? `Edit` : 'New'}
            <form onSubmit={handleSubmit}>
                <p>name</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit'>{id ? `Update` : 'Create'}</button>
            </form>
        </div>
    )
} 

export default BugForm