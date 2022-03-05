import {useState} from "react";
import Header from './components/Header';
import Input from './components/Input';
import List from "./components/List";
import "./App.css";

function App() { // Creating function-based Components
  const [items, setItems] = useState([
  ]);

  const add = item => {
    const newItems = [...items, item];
    setItems(newItems);
  };

  const edit = index => {
    console.log(index)
  }

  const remove = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="App-Container">
      <Header/>
      <Input add={add} /> {/* Passing & Using Props with Components */}
      <br/>
      <List items={items} edit={edit} remove={remove}/>
    </div>
  );
}

export default App;