import PropTypes from 'prop-types';

const Button = ({ name, property, clickHandler }) => (
  <button type="button" className={property} onClick={() => clickHandler(name)}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  property: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: 'button',
  property: 'button',
};

export default Button;
