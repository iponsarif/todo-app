import { useState, useEffect } from 'react';

function Input({ save, editItem }) { // Passing & Using Props with Components
  const defaultItem = {
    text: "",
    status: "Todo",
    assignee: "",
    color: "#FFFFFF",
    dueDate: "",
  };
  const [item, setItem] = useState(defaultItem);
  const [isEditing, setEditing] = useState(false);

  useEffect(() => { // Effect Hooks (useEffect)
    if (!editItem) return;

    setItem(editItem);
    setEditing(true);

  }, [editItem])

  const handleSubmit = e => { // Event Handling
    e.preventDefault();
    if (!item.text) return;

    if (isEditing) {
      save(item, true) // Passing & Using Props with Components
      setEditing(false);
    } else {
      save(item);
    }
    
    setItem(defaultItem);
  };

  const handleTextChange = e => {
    setItem({...item, text:e.target.value})
  }
  const handleStatusChange = e => {
    setItem({...item, status:e.target.value})
  }
  const handleAssigneeChange = e => {
    setItem({...item, assignee:e.target.value})
  }
  const handleColorChange = e => {
    setItem({...item, color:e.target.value})
  }
  const handleDateChange = e => {
    setItem({...item, dueDate:e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} className="Table-Center"> 
    <table className='App-Table-Input'>
      <tbody>
        <tr>
          <td><label>Text</label></td>
          <td><input type="text" className="input" value={item.text} onChange={handleTextChange} placeholder="Todo" /></td>
        </tr>
        <tr>
          <td><label>Status</label></td>
          <td>
            <input
              type="radio"
              name="status"
              id="todo"
              value="Todo"
              checked={item.status === "Todo"}
              onChange={handleStatusChange}/>
            <label>Todo</label><br/>
            <input 
              type="radio"
              name="status"
              id="inProgress"
              value="In Progress"
              checked={item.status === "In Progress"}
              onChange={handleStatusChange}/>
            <label>In Progress</label><br/>
            <input 
              type="radio"
              name="status"
              id="done"
              value="Done"
              checked={item.status === "Done"}
              onChange={handleStatusChange}/>
            <label>Done</label>
          </td>
        </tr>
        <tr>
          <td><label>Assignee</label></td>
          <td>
            <select name="assignee" id="assignee" value={item.assignee} onChange={handleAssigneeChange}>
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
            <input type="color" id="itemColor" name="itemColor" value={item.color} onChange={handleColorChange}/> {/* Attaching event handler in ReactJS */}
          </td>
        </tr>
        <tr>
          <td><label>Due Date</label></td>
          <td><input type="date" className="input" value={item.dueDate} onChange={handleDateChange}/></td>
        </tr>
      </tbody>
    </table>
    <br/>
    <div style={{textAlign:"center"}}>
      {!isEditing && <input type="submit" value="Add Item"/>}
      {isEditing && <input type="submit" value="Edit Item"/>}
    </div>
  </form>
  );
}

export default Input;