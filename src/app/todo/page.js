"use client";

import React from "react"
import Title from "@/components/title"
import TodoList from "@/components/Todo/TodoList"
import TodoCreateButton from "@/components/Todo/TodoCreateButton"

import "./page.css";
import TodoCreateModal from "@/components/Todo/TodoCreateModal";

export default function TodoPage() {
  const items = [
    { title: "Buy milk", completed: false },
    { title: "Buy bread", completed: true },
    { title: "Buy eggs", completed: false },
  ]

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <main>
      <div id="todo-bar">
        <Title text="To-do list" />
        <TodoCreateButton onOpen={handleOpenModal} />
      </div>
      <TodoList items={items} />

      <TodoCreateModal onClose={handleCloseModal} visible={isModalVisible} />
    </main>
  )
}
