import { useState } from 'react';
import './App.css';

const defaultFormData = {
  title: '',
  body: '',
};

function App() {
  const [formData, setformData] = useState(defaultFormData);

  const { title, body } = formData;

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
    </>
  );
}

export default App;
