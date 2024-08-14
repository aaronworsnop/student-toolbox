import React from 'react';

const TodoListItem = ({ item, onToggle }) => {
    return (
        <div>
            <input type="checkbox" checked={item.completed} onChange={() => onToggle(item.id)} />
            {item.title}
        </div>
    )
}

export default TodoListItem;