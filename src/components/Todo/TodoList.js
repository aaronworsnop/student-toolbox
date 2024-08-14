import TodoListItem from "./TodoListItem";

export default function TodoList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <TodoListItem key={index} item={item} />
            ))}
        </ul>
    );
}