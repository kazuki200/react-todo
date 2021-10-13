
export const IncompleteTodos = (props) => {
  const {todos, onClikcComplete , onClikcDelete} = props;
  return (
    <ul className="incomplete-area">
  <p className="title">未完了のTODO</p>
    {todos.map((todo,index) => {
      return(
      <div key={todo} className="list-row">
        <li>{todo}</li>
        <button onClick={() => onClikcComplete(index)}>完了</button>
        <button onClick={() => onClikcDelete(index)}>削除</button>
      </div>
      );
    })}
    </ul>

  );
};