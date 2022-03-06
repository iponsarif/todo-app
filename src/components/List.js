import Item from './ListItem';

function List({items, edit, remove}) {
  return (
    items.length
    ? <table className='Table-Border Table-Center'>
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
          {items.map((item, index) => ( /* List & Keys */
            <Item
            key={index}
            index={index}
            item={item}
            edit={edit}
            remove={remove}
            />
          ))}
        </tbody>
      </table>
    : null);
}

export default List;