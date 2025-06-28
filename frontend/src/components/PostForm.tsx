import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

interface PostFormProps {
  onPostCreated: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: 認証から実際のユーザーIDに置き換える
      const userId = 1; 
      await axios.post(`http://localhost:8000/users/${userId}/posts/`, { title, content });
      setTitle('');
      setContent('');
      onPostCreated();
    } catch (error) {
      console.error('投稿の作成中にエラーが発生しました:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>新しい投稿を作成</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>タイトル</Form.Label>
          <Form.Control
            type="text"
            placeholder="タイトルを入力"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>内容</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="内容を入力"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          投稿を作成
        </Button>
      </Form>
    </Container>
  );
};

export default PostForm;
