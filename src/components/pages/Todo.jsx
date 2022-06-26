const Todo = ({ todo, onComplate, onEdit, onDelete }) => {
  return (
    <div key={todo.id} className="todo">
      <div className={`todoText ${todo.isComplete ? "completedTodo" : ""}`}>
        {todo.text}
      </div>
      <div className="button-todos">
        <button className="edit" onClick={onEdit}>
          Edit
        </button>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
        <button className="complated" onClick={onComplate}>
          complate
        </button>
      </div>
    </div>
  );
};

export default Todo;
