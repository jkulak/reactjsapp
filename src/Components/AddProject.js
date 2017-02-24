import React from 'react';
import uuid from 'uuid';

class AddProject extends React.Component{

    constructor() {
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['Funny', 'Sad', 'Good', 'Bad']
    }

    handleSubmit(e) {

        e.preventDefault();
        if (this.refs.title.value === '') {
            alert('Title is required!');
        } else {
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, () => {

                console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
    }

    render(){

        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });

        return (
            <div className="">
                <h3>Add project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

AddProject.propTypes = {
    property: React.PropTypes.array,
    addProject: React.PropTypes.func
}

export default AddProject;
