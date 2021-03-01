import renderer from 'react-test-renderer';
import Route from '../components/routes';
import MathMagicians from '../pages/mathmagicians';
import Quote from '../pages/quote';
import Calculator from '../pages/calculator';

describe('checks if the Routes have the correct directories', () => {
  test('should render to Home route', () => {
    const component = MathMagicians;

    const tree = renderer
      .create(<Route path="/" component={component} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render to App route', () => {
    const component = Calculator;

    const tree = renderer
      .create(<Route path="/calculator" component={component} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render to Quote route', () => {
    const component = Quote;

    const tree = renderer
      .create(<Route path="/calculator" component={component} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
