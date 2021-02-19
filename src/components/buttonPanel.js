import Button from './button';

const ButtonPanel = () => (
  <div className="button-container">
    <div className="top-buttons">
      <Button name="AC" property="basic-op" />
      <Button name="+/-" property="basic-op" />
      <Button name="%" property="basic-op" />
      <Button name="/" property="basic-op" />
    </div>
    <div className="second-buttons">
      <Button name="7" property="nums" />
      <Button name="8" property="nums" />
      <Button name="9" property="nums" />
      <Button name="X" property="basic-op" />
    </div>
    <div className="third-buttons">
      <Button name="4" property="nums" />
      <Button name="5" property="nums" />
      <Button name="6" property="nums" />
      <Button name="-" property="basic-op" />
    </div>
    <div className="fourth-buttons">
      <Button name="1" property="nums" />
      <Button name="2" property="nums" />
      <Button name="3" property="nums" />
      <Button name="+" property="basic-op" />
    </div>
    <div className="fifth-buttons">
      <Button name="0" property="nums equal" />
      <Button name="." property="basic-op" />
      <Button name="=" property="basic-op" />
    </div>
  </div>
);

export default ButtonPanel;
