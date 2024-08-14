import React from 'react';

export default function TodoCreate({ onCreate }) {
    // An "add" "+" button that pops up another floating pane

    return (
        <div>
            <button onClick={onCreate} style={{ padding: '10px' }}>+</button>
        </div >
    );
}
