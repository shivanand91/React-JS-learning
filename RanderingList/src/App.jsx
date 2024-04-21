 import List from "./List"

function App() {

  return (
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetable} category="Vegetables"/>
    </>
  );
}

export default App
