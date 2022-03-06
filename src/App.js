import { useState } from "react";
import Header from './components/Header';
import Input from './components/Input';
import List from "./components/List";
import "./App.css";

function App() { // Creating function-based Components
  const [editItem, setEditItem] = useState(null);
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const save = (item, isEdit) => {
    if (isEdit) {
      items[editIndex] = item;
      const newItems = [...items];
      setItems(newItems);
    } else {
      const newItems = [...items, item];
      setItems(newItems);
    }
  };

  const edit = index => {
    if (index === null) return;
    console.log({index});
    setEditIndex(index);
    setEditItem({...items[index]});
  }

  const remove = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <Header/>
      <Input save={save} editItem={editItem} /> {/* Passing & Using Props with Components */}
      <br/>
      <List items={items} edit={edit} remove={remove}/>
    </div>
  );
}

export default App;