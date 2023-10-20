import express from "express";
const app = express();

app.get("/health", (req, res) => {
  res.send("all Good");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [ 
    { id: 1, title: "A jokes", content: " why dont scientists trust on atom" },
    {
      id: 2,
      title: "B jokes",
      content: " what did the atom say to the moleculer",
    },
    {
      id: 3,
      title: "C jokes",
      content:
        " how many electrons does a proton have in its outermost energy level",
    },
    {
      id: 4,
      title: "D jokes",
      content: " why do physicist and chemist look so happy on sunny day",
    },
  ];
  res.send(jokes);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
