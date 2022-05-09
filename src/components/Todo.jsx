/** @format */

const Todo = ({ todo, onComplate, onEdit, onDelete }) => {
  return (
    <div key={todo.id} className="todo">
      <div className={todo.isComplete ? "completedTodo" : ""}>{todo.text}</div>
      <div>
        <button className="edit" onClick={onEdit}>
          Edit
        </button>
        <button className="complete" onClick={onComplate}>
          Complate
        </button>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
