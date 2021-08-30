import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../store/actions/todoAction';
import { connect } from 'react-redux';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title !== '') {
            const newTodo = {
                id: uuidv4(),
                title,
                completed: false,
            };
            addTodo(newTodo);
            setTitle('');
        }
    };

    const getTitle = (e) => {
        setTitle(e.target.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    onChange={getTitle}
                    value={title}
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTodo })(TodoForm);
