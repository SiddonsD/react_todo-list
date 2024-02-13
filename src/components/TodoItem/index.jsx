import './style.css'

function TodoItem(props) {
    return (
    <div className={`todo ${props.todo.isCompleted ? "complete" : ""}`}>
        {props.todo.text}
        <div>
            <button onClick={() =>
        props.completeTodo(props.index)}>complete</button>
        {/* button to delete todo */}
            <button onClick={() =>
        props.removeTodo(props.index)}>X</button>
        </div>
    </div>
    );
}

export default TodoItem;