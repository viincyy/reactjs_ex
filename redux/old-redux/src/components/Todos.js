import React from 'react';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';

const Todos = ({ todos }) => {
    return (
        <div className='todo-list'>
            <TodoForm />
            <ul style={{ padding: '10px' }}>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <input type='checkbox' />
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.myTodos.todos,
});

export default connect(mapStateToProps, {})(Todos);
