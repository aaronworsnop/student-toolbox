import React from "react"

import "./TodoCreateModal.css";

export default function TodoCreateModal({ onClose }) {


    return (
        <div id="todo-create-modal">
            <div className="title-bar">
                <h1>Create New Todo Item</h1>
                <button id="todo-create-modal-close-button" onClick={onClose}>X</button>
            </div>

            <div id="todo-create-modal-form">
                <label>
                    Title <input type="text" placeholder="Enter a title" />
                </label>

                <label>
                    Description <textarea placeholder="Enter a description" />
                </label>
                <button>Create</button>
            </div>
        </div>
    );
}
