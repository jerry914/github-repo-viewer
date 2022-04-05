import React,{ useState, useEffect, useCallback }  from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const RepoData=()=>{
    const [data, setData] = useState([])
    const params = useParams()
    const sendQuery = useCallback(async () => {
        try {
            const res = await axios.get(`http://api.github.com/repos/${params.username}/${params.repo}`)
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }, []);

    useEffect(() => {
        sendQuery();
    }, []);

    return (
        <div className="App">
        <div className="wrapper">
            <div>{data.full_name}</div>
            <div>{data.description}</div>
            <div>{data.stargazers_count}</div>
            <a href={data.svn_url}>Get hitbub</a>
        </div>
        </div> 
    );
}
export default RepoData