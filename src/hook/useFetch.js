import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'

function useFetch(page) {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const params = useParams()

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      const res = await axios.get(`https://api.github.com/users/${params.username}/repos?per_page=10&page=${page}`)
      setList((prev) => [...prev, ...res.data]);
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }, [query, page])

  useEffect(() => {
    sendQuery(query)
  }, [query, sendQuery, page])
  useEffect(() => {
    setQuery(params.username)
  }, [query])

  return { loading, error, list, query }
}

export default useFetch