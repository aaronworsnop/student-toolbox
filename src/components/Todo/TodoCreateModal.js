import React from "react"

import "./TodoCreateModal.css";

import PropTypes from "prop-types";

export default function TodoCreateModal({ visible, onClose }) {
    TodoCreateModal.propTypes = {
        visible: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    };

    const modalVisible = { display: visible ? 'block' : 'none' };

    return (
        <div id="todo-create-modal" style={modalVisible}>
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
