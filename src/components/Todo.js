import React, {Component} from 'react'

export default class Todo extends Component {
    constructor() {
        super()
        this.state={
            index: null
        }
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove(e) {
        e.preventDefault();
        this.props.onRemove(this.props.index);
    }
    componentDidMount() {
        this.setState({index:this.props.index})
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{this.props.todo.title}</h3>
                        <span className="badge badgepill badge-danger ml-2">{this.props.todo.priority}</span>
                    </div>
                    <div className="card-body">
                        <p>{this.props.todo.description}</p>
                        <p>
                            <mark>{this.props.todo.responsible}</mark>
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={this.handleRemove}>
                            delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
