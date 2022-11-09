import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/poasdsts',
        );

        setData(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {loading && 'Loading...'}

      {error && 'Oops, could not fetch posts, please try again'}

      {data &&
        data.map((post) => {
          const { id, title, body } = post;

          return (
            <article key={id}>
              <h2>{title}</h2>
              <p>{id}</p>
              <p>{body}</p>
            </article>
          );
        })}
    </>
  );
}

export default App;
