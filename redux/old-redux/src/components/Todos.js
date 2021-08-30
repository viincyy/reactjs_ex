import React from 'react';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { markComplete, deleteTodo } from '../store/actions/todoAction';

const Todos = ({ todos, markComplete, deleteTodo }) => {
    return (
        <div className='todo-list'>
            <TodoForm />
            <ul style={{ padding: '10px' }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={todo.completed ? 'completed' : ''}
                    >
                        {todo.title}
                        <input
                            type='checkbox'
                            onClick={markComplete.bind(this, todo.id)}
                        />
                        <button onClick={deleteTodo.bind(this, todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { markComplete, deleteTodo })(Todos);
