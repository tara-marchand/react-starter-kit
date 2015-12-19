import React from 'react';

class TextInput extends React.Component {
    render() {
        return <input type="text" placeholder={this.props.placeholder} value={this.props.value} />
    }
}

TextInput.propTypes = {
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
};

export default TextInput;
