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
      <Button name="7" property="basic-op" />
      <Button name="8" property="basic-op" />
      <Button name="9" property="basic-op" />
      <Button name="*" property="basic-op" />
    </div>
    <div className="third-buttons">
      <Button name="4" property="basic-op" />
      <Button name="5" property="basic-op" />
      <Button name="6" property="basic-op" />
      <Button name="-" property="basic-op" />
    </div>
    <div className="fourth-buttons">
      <Button name="1" property="basic-op" />
      <Button name="2" property="basic-op" />
      <Button name="3" property="basic-op" />
      <Button name="+" property="basic-op" />
    </div>
    <div className="fifth-buttons">
      <Button name="0" property="basic-op" />
      <Button name="." property="basic-op" />
      <Button name="=" property="basic-op" />
    </div>
  </div>
);

export default ButtonPanel;
