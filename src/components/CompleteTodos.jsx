export const CompleteTodos = (props) => {
  const {completeTdos,onClickBack} = props;
  return(
    <ul className="complete-area">
    <p className="title">完了のTODO</p>
    {completeTdos.map((todo,index) => {
      return (
        <div key={todo} className="list-row">
          <li>{todo}</li>
          <button onClick={() => onClickBack(index)}>戻す</button>
        </div>
      );
    })}
    </ul>
  );
}