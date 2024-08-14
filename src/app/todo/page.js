import React from "react"
import Title from "@/components/title"
import TodoList from "@/components/Todo/TodoList"

export default function TodoPage() {
  const items = [
    { title: "Buy milk", completed: false },
    { title: "Buy bread", completed: true },
    { title: "Buy eggs", completed: false },
  ]

  return (
    <main>
      <Title text="To-do list" />
      <TodoList items={items} />
    </main>
  )
}
