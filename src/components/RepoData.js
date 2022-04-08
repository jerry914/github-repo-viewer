import React,{ useState, useEffect, useCallback }  from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import './Repo.css'

const RepoData=()=>{
    const [data, setData] = useState([])
    const params = useParams()
    const sendQuery = useCallback(async () => {
        try {
            const res = await axios.get(`https://api.github.com/repos/${params.username}/${params.repo}`)
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
            <div className="title">{data.full_name}</div>
            <div className="discription">{data.description}</div>
            <div className="discription">Stargazers Count: {data.stargazers_count}</div>
            <a className="git-link" href={data.svn_url}>View Github</a>
        </div>
        </div> 
    );
}
export default RepoData