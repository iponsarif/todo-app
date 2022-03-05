import Item from './ListItem';

function List({items, edit, remove}) {
  if (items.length < 1) { // Conditional Rendering
    return null;
  }

  return (
  <table className='App-Table'>
    <thead>
      <tr>
        <td>Text</td>
        <td>Status</td>
        <td>Assignee</td>
        <td>Due Date</td>
        <td colSpan='2' align='center'>Actions</td>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <Item
        key={index}
        index={index}
        item={item}
        edit={edit}
        remove={remove}
        />
      ))}
      
    </tbody>
    
  </table>);
}

export default List;