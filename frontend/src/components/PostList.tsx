import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
  owner_id: number;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts/');
        setPosts(response.data);
      } catch (error) {
        console.error('投稿の取得中にエラーが発生しました:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Container className="mt-4">
      <h2>投稿一覧</h2>
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
            <Button variant="info" size="sm" className="me-2">編集</Button>
            <Button variant="danger" size="sm">削除</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PostList;
