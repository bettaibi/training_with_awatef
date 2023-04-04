import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;