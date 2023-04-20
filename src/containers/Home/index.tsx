import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard';
import './index.css';
import Header from '../../components/Header';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = function()  {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>('');
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handlePostClick = (id: number) => {
    // Navigate to post details page
    console.log(`Navigating to post details page for post ${id}`);
  };

  const handleFavoriteClick = (id: number) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
   <div>
     <Header />
   
    <div className="containerh">
      
      <input
        className="filter-input"
        type="text"
        placeholder="Filter by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className="post-list">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onPostClick={handlePostClick}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;


