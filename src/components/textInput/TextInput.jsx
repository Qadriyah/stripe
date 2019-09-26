import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { attachToParentComponent } from './helper';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            clientError: ''
        };
        this.textInputRef = React.createRef();
    }

    componentDidMount() {
        attachToParentComponent(this);
    }

    /**
     * Handles input value change
     */
    handleChange = event => this.setState({ value: event.target.value });

    /**
     * Gets the input value
     * 
     * @returns string
     */
    getValue = () => {
        const { value } = this.state;
        return value;
    }

    /**
     * Manages the focus of the input element
     */
    focus = () => this.textInputRef.current.focus();

    render() {
        const { value, clientError } = this.state;
        const { name, placeholder, type, pattern, className, serverError, label } = this.props;
        const error = clientError || serverError;

        return (
            <div className="form-group">
                <label htmlFor={name}>{label.toUpperCase()}</label>
                <input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    onChange={this.handleChange}
                    onClick={this.focus}
                    pattern={pattern}
                    ref={this.textInputRef}
                    className={classnames(className, {
                        "is-invalid": error
                    })}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        )
    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    pattern: PropTypes.string,
    className: PropTypes.string.isRequired,
    serverError: PropTypes.string.isRequired,
}

TextInput.defaultProps = {
    type: 'text',
    pattern: null
}

export default TextInput;
