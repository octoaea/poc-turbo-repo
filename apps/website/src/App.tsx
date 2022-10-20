import { Post } from '@octo/types';
import { Button } from '@octo/ui-components';
import { Suspense, useEffect, useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {

    fetch("http://localhost:4000").then(r => r.json())
    .then((response: {posts: Post[]}) => {
      setPosts(response.posts);
    })
  }, [])
  return (
    <div className="App">
      <Button label="Click me" onClick={() => {
        console.log("You clicked me. YAAAAAAAY!!!");
      }} />

      <Suspense fallback={<h1> Loading posts ...</h1>}>
        {posts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </Suspense>
    </div>
  )
}

export default App
