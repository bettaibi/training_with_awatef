import React, { useState, useEffect } from 'react';
import './index.css'

interface PostCardProps {
  post: Post;
  onPostClick: (id: number) => void;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, onPostClick }) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(
    () => JSON.parse(localStorage.getItem(`post-${post.id}`) || 'false')
  );

  useEffect(() => {
    localStorage.setItem(`post-${post.id}`, JSON.stringify(isFavorited));
  }, [post.id, isFavorited]);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="post-card">
      <h3 onClick={() => onPostClick(post.id)}>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </div>
  );
};

export default PostCard;