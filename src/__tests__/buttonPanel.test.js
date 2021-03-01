import renderer from 'react-test-renderer';
import ButtonPanel from '../components/buttonPanel';

describe('checks rendering for ButtonPanel', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<ButtonPanel name="AC" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
