import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Display from '../components/display';

describe('checks if Display component renders correctly', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should renders correct value when edited', () => {
    const result = '23';

    render(<Display result={result} />);
    const text = screen.getByText('23');
    expect(text).toBeInTheDocument();
  });
});
