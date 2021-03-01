import renderer from 'react-test-renderer';
import ButtonPanel from '../components/buttonPanel';

describe('checks rendering for ButtonPanel', () => {
  const clickHandler = () => {
    '';
  };

  test('should render correctly', () => {
    const tree = renderer
      .create(<ButtonPanel name="AC" property="basic-op" clickHandler={clickHandler} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
