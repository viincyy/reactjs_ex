import React from 'react';
import { connect } from 'react-redux';
const Navbar = ({ todos }) => {
    const length = todos.length;
    return (
        <div className='navbar'>
            <h1>Redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todo: {length}</li>
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.myTodos.todos,
});

export default connect(mapStateToProps, {})(Navbar);
