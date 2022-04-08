import useFetch from "../hook/useFetch"
import { useState, useEffect, useCallback, useRef } from "react"
import { Link } from 'react-router-dom'
import './Repo.css'

function ListRepo() {
  const [page, setPage] = useState(1);
  const { loading, error, list, query} = useFetch(page);
  const loader = useRef(null);
  
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "10px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  
  return (
    <div className="App">
      <div className="title">{query}</div>
      <div className="list-container">
        {list.map((item, i) => (
          <div key={i}>
            <Link style={{ textDecoration: 'none', color:' #333 ',fontSize: '20px' }} to={`${item.name}`}>
              <div className="list-item">{i+1}. {item.name} {item.stargazers_count}</div>
            </Link>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
}

export default ListRepo;