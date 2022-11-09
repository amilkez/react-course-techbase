import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const defaultFormData = {
  title: '',
  body: '',
  userId: 1,
};

function App() {
  const [formData, setformData] = useState(defaultFormData);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { title, body } = formData;

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);

      setSuccess(true);
      setError(false);
    } catch (error) {
      setError(true);
    }

    setformData(defaultFormData);
  };

  return (
    <>
      <h1>form</h1>
      <p>create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">title</label>
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <label htmlFor="body">body</label>
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <button type="submit">upload post</button>
      </form>

      {error && <p>Oops, could not upload post</p>}
      {success && <p>Post upload has succeeded</p>}
    </>
  );
}

export default App;
