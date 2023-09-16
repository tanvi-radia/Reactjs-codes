// Fetching data from API end point: axios is used for data fetching
// npm i axios
// Fetching data from JSON placeholder
import React,{useState, useEffect} from "react";
import axios from 'axios'
function DataFetching(){
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <div>
            <ul>
            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
            </ul>
        </div>
    )
}
export default DataFetching