export default function TodoListItem({ item }) {
    return (
        <li>
            <input type="checkbox" checked={item.completed} />
            {item.title}
        </li>
    )
}