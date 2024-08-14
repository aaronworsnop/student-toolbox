import React from "react"
import Title from "@/components/title"
import TodoList from "@/components/Todo/TodoList"
import TodoCreate from "@/components/Todo/TodoCreate"

import "./page.css";
import TodoCreateModal from "@/components/Todo/TodoCreateModal";

export default function TodoPage() {
  const items = [
    { title: "Buy milk", completed: false },
    { title: "Buy bread", completed: true },
    { title: "Buy eggs", completed: false },
  ]

  return (
    <main>
      <div id="todo-bar">
        <Title text="To-do list" />
        <TodoCreate />
      </div>
      <TodoList items={items} />

      <TodoCreateModal />
    </main>
  )
}
