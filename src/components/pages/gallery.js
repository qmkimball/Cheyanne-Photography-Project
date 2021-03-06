import React from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(()=> {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div className="container">
            <h1>Recent Photos</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            
        </div>
    );
}