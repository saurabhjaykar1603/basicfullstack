import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <h1>FULL STACK PROJECT</h1>

      <p>JOKES : {jokes.length}</p>

      {jokes.map((joke, i) => {
        const { id, title, content } = joke;

        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
