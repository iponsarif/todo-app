function Item({ item, index, edit, remove }) {
  return (
    <tr style={{backgroundColor:item.color}}>
      <td>{item.text}</td>
      <td>{item.status}</td>
      <td align='center'>{item.assignee || '-'}</td>
      <td align='center'>{item.dueDate || '-'}</td>
      <td>
        <button className="Btn-Edit" onClick={() => edit(index)}>Edit</button>
        <button className="Btn-Remove" onClick={() => remove(index)}>Remove</button>
      </td>
    </tr>
  );
}

export default Item;