"use client";

import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ items }) {
    const [todoItems, setTodoItems] = useState(items);

    const handleToggle = (id) => {
        const updatedItems = todoItems.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        setTodoItems(updatedItems);
    };

    return (
        <ul>
            {todoItems.map((item, index) => (
                <TodoListItem key={index} item={item} onToggle={handleToggle} />
            ))}
        </ul>
    );
}