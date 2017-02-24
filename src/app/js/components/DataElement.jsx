'use strict';

import React from 'react';

class DataElement extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            value: "",
            elements: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var arr = this.state.elements;
        arr.push(this.state.value);
        this.setState({elemets: arr})
    }

    showElements() {
        let elementList = this.state.elements.map(n => {
            return <li key={n} className="list-group-item">{n}</li>;
        });

        return <ul className="list-group">{elementList}</ul>
    }

    render(){
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">Add element</div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className={"form-group"}>
                                <label className="control-label">Element</label>
                                <input type="text" className="form-control" ref="nameTextField" onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
                <hr />
                {this.showElements()}
            </div>
        );
    }
}

export default DataElement;
