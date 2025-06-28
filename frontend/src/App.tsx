import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const handlePostCreated = () => {
    // 新しい投稿が作成された後に投稿リストを更新
    // 実際のアプリケーションでは、状態管理ソリューションやContext APIを使用するかもしれません
    window.location.reload(); 
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">高機能ブログCMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">ホーム</Nav.Link>
              <Nav.Link href="#link">ログイン</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1>高機能ブログCMSへようこそ！</h1>
        <PostForm onPostCreated={handlePostCreated} />
        <hr />
        <PostList />
      </Container>
    </div>
  );
}

export default App;
