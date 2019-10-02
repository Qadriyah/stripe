import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ col, type, className, value, onClick, dataTest }) => {
  return (
    <div className={col}>
      <input
        type={type}
        className={className}
        value={value}
        onClick={onClick}
        data-test={dataTest}
      />
    </div>
  );
};

Button.propTypes = {
  col: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  dataTest: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  className: 'btn btn-primary btn-lg btn-block',
  dataTest: 'component-button-submit'
};

export default Button;
