import { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const initialDb: { id: number; name: string; stars: number }[] = [
  {
    id: 1,
    name: "Typescript",
    stars: 136,
  },
  {
    id: 2,
    name: "Python",
    stars: 3159,
  },
  {
    id: 3,
    name: "Go",
    stars: 55,
  },
  {
    id: 4,
    name: "Rust",
    stars: 33,
  },
  {
    id: 5,
    name: "Solidity",
    stars: 12001,
  },
];

function Functions() {
  const [response, setResponse] = useState(initialDb);

  return (
    <>
      <h2>CRUD APP</h2>
      <Form />
      <Table data={response} />
    </>
  );
}

export default Functions;
