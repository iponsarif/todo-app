import { useState, useEffect } from "react";
import Header from './components/Header';
import Input from './components/Input';
import List from "./components/List";
import ReactPaginate from "react-paginate";
import "./App.css";

const paginateArray = (array, perPage, page) => array.slice((page - 1) * perPage, page * perPage);

function App() { // Creating function-based Components
  const [editItem, setEditItem] = useState(null),
   [editIndex, setEditIndex] = useState(null);

  const [items, setItems] = useState([]),
    [displayItems, setDisplayItems] = useState([]);

  const [itemsPerPage] = useState(5),
    [currentPage, setCurrentPage] = useState(0);

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
    index = index + (currentPage * itemsPerPage);
    if (index === null) return;
    console.log({index});
    setEditIndex(index);
    setEditItem({...items[index]});
  }

  const remove = index => {
    index = index + (currentPage * itemsPerPage);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  useEffect(() => {
    const newData = paginateArray(items.slice(0), itemsPerPage, currentPage + 1);
    setDisplayItems(newData);
  }, [currentPage, items]);

  return (
    <div>
      <Header/>
      <Input save={save} editItem={editItem} /> {/* Passing & Using Props with Components */}
      <br/>
      <List items={displayItems} edit={edit} remove={remove}/>
        <ReactPaginate
          className='react-paginate'
          breakLabel="..."
          nextLabel=""
          onPageChange={e => setCurrentPage(e.selected)}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(items.length / itemsPerPage) || 0}
          previousLabel=""
          renderOnZeroPageCount={null}
          previousClassName="arrow left"
          nextClassName='arrow right'
        />
    </div>
  );
}

export default App;