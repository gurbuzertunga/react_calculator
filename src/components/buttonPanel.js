import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="button-container">
    <div className="top-buttons">
      <Button name="AC" property="basic-op" clickHandler={clickHandler} />
      <Button name="+/-" property="basic-op" clickHandler={clickHandler} />
      <Button name="%" property="basic-op" clickHandler={clickHandler} />
      <Button name="/" property="basic-op" clickHandler={clickHandler} />
    </div>
    <div className="second-buttons">
      <Button name="7" property="nums" clickHandler={clickHandler} />
      <Button name="8" property="nums" clickHandler={clickHandler} />
      <Button name="9" property="nums" clickHandler={clickHandler} />
      <Button name="X" property="basic-op" clickHandler={clickHandler} />
    </div>
    <div className="third-buttons">
      <Button name="4" property="nums" clickHandler={clickHandler} />
      <Button name="5" property="nums" clickHandler={clickHandler} />
      <Button name="6" property="nums" clickHandler={clickHandler} />
      <Button name="-" property="basic-op" clickHandler={clickHandler} />
    </div>
    <div className="fourth-buttons">
      <Button name="1" property="nums" clickHandler={clickHandler} />
      <Button name="2" property="nums" clickHandler={clickHandler} />
      <Button name="3" property="nums" clickHandler={clickHandler} />
      <Button name="+" property="basic-op" clickHandler={clickHandler} />
    </div>
    <div className="fifth-buttons">
      <Button name="0" property="nums equal" clickHandler={clickHandler} />
      <Button name="." property="basic-op" clickHandler={clickHandler} />
      <Button name="=" property="basic-op" clickHandler={clickHandler} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
