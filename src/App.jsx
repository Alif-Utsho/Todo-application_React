import React from 'react'
import './App.css';

import Todo from './components/todo'

const App = () => {
    return (
        <div className="container mt-4">
            <h1 className="text-center">Todo Application</h1>
            <Todo/>
        </div>
    );
}

export default App;