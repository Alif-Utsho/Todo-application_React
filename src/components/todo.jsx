import React from "react";
import shortid from 'shortid'

import Search from "./search";
import Tool from "./tool";
import List from "./list";
import Table from "./table";
import Modal from "./modal"

class Todo extends React.Component {
    state = {
        todos: [
            
        ],
        listView: true,
        searchTerm: '',
        filter: 'all'
    };

    completeHandler = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find((t) => todoId === t.id);
        todo.isCompleted = !todo.isCompleted;
        this.setState({ todos });
    };

    checkHandler = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find((t) => t.id === todoId);
        todo.isSelected = !todo.isSelected;
        this.setState({ todos });
    };

    listViewHandler = () => {
        this.setState({
            listView: !this.state.listView
        })
    }

    createTodo = (todo) => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isCompleted = false
        todo.isSelected = false

        const todos = [todo, ...this.state.todos]
        this.setState({ todos })
    }

    resetHandler = () => {
        const todos = this.state.todos.filter(() => null)
        this.setState({ todos })
    }

    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isCompleted)
        this.setState({ todos })
    }

    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelected)
        this.setState({ todos })
    }

    performSearch = () => {
        return this.state.todos.filter(todo =>
            todo.tittle
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
        )
    }

    filterHandler = filter => {
        this.setState({ filter })
    }

    performFilter = todos => {
        const { filter } = this.state
        if (filter === 'completed') {
            return todos.filter(todo => todo.isCompleted)
        }
        else if (filter === 'running') {
            return todos.filter(todo => !todo.isCompleted)
        }
        else {
            return todos
        }
    }

    searchHandler = searchTerm => {
        this.setState({ searchTerm })
    }

    getView = () => {
        const todo = this.performSearch()
        const todos = this.performFilter(todo)

        return this.state.listView ?
            (
                <List
                    todos={todos}
                    completeHandler={this.completeHandler}
                    checkHandler={this.checkHandler}
                />
            ) : (
                <Table
                    todos={todos}
                    completeHandler={this.completeHandler}
                    checkHandler={this.checkHandler}
                />
            )
    }

    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-9">
                    <div>
                        <Search searchHandler={this.searchHandler} />
                        <Tool
                            todos={this.state.todos}
                            listView={this.state.listView}
                            listViewHandler={this.listViewHandler}
                            resetHandler={this.resetHandler}
                            clearCompleted={this.clearCompleted}
                            clearSelected={this.clearSelected}
                            filterHandler={this.filterHandler}
                        />
                        <div>{this.getView()}</div>

                    </div>
                    <Modal createTodo={this.createTodo} />
                </div>
            </div>
        );
    }
}

export default Todo;
