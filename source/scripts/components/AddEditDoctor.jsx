import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

class AddEditDoctor extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return;
    }

    render() {
        return (
            <div className="panel-footer">
                <TextInput placeholder="New doctor name" />
                <Button text="Add" onClick={this.props.handleAddButtonClick} />
            </div>
        );
    }
}

export default AddEditDoctor;
