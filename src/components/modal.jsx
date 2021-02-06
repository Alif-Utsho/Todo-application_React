import React from 'react'

class Modal extends React.Component{

    state= {
        tittle: '',
        description: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        if (this.state.tittle) {
            event.preventDefault();
            this.props.createTodo(this.state);
            this.setState({ tittle: '', description: '' });
        }
        else {
            alert('Enter a tittle')
        }
    }


    render() {
        return (
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Create a new Todo item</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit='handleSubmit'>
                                    <div class="mb-3">
                                        <label class="col-form-label">Tittle</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="tittle"
                                            value={this.state.tittle}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label">Description</label>
                                        <textarea
                                            class="form-control"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </form>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleSubmit}>Submit</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal