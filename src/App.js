import ToDo from "./ToDo.js";

function App() {
  const todo = {
    usedId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  return (
    <>
      <ToDo />
    </>
  );
}

export default App;
