import React from 'react';

export default function TodoCreateButton({ onOpen }) {
    return (
        <div>
            <button onClick={onOpen} style={{ padding: '10px' }}>+</button>
        </div>
    );
}
