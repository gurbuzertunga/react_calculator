import PropTypes from 'prop-types';

const Button = ({ name, property }) => (
  <button type="button" className={property}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  property: PropTypes.string,
};

Button.defaultProps = {
  name: 'button',
  property: 'button',
};

export default Button;
