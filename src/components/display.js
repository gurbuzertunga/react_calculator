import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div>{result}</div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'div',
};

export default Display;
