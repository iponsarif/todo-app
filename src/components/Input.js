import { useState } from 'react';

function Input({ add }) {
  const defaultItem = {
    text: "",
    status: "Todo",
    assignee: "",
    color: "#FFFFFF",
    dueDate: "",
  };
  const [item, setItem] = useState(defaultItem);

  const handleSubmit = e => {
    e.preventDefault();
    if (!item) return;
    add(item);
    setItem(defaultItem);
  };

  const handleColorChange = e => {
    e.preventDefault();
    setItem({...item, color:e.target.value})
  }

  const handleDateChange = e => {
    e.preventDefault();
    setItem({...item, dueDate:e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}> 
    <table className='App-Table-Input'>
      <tbody>
        <tr>
          <td><label>Text</label></td>
          <td><input type="text" className="input" value={item.text} onChange={e=> setItem({...item, text:e.target.value})} placeholder="Add new todo" /></td>
        </tr>
        <tr>
          <td><label>Status</label></td>
          <td>
            <input type="radio" name="status" id="todo" value="Todo" defaultChecked="checked"/>
            <label>Todo</label><br/>
            <input type="radio" name="status" id="inProgress" value="In Progress"/>
            <label>In Progress</label><br/>
            <input type="radio" name="status" id="done" value="Done"/>
            <label>Done</label>
          </td>
        </tr>
        <tr>
          <td><label>Assignee</label></td>
          <td>
            <select name="assignee" id="assignee" value={item.assignee} onChange={e => setItem({...item, assignee: e.target.value} )}>
              <option value=""></option>
              <option value="Udin">Udin</option>
              <option value="Asep">Asep</option>
              <option value="Doni">Doni</option>
              <option value="Jack">Jack</option>
              <option value="John">John</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label>Color</label></td>
          <td>
            <input type="color" id="itemColor" name="itemColor" value={item.color} onChange={handleColorChange}/>
          </td>
        </tr>
        <tr>
          <td><label>Due Date</label></td>
          <td><input type="date" className="input" value={item.dueDate} onChange={handleDateChange}/></td>
        </tr>
      </tbody>
    </table>
      
    <input type="submit" value="Add Item"/>
  </form>
  );
}

export default Input;