import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from '../components/button';

describe('checks if Button component renders correctly', () => {
  const clickHandler = () => {
    '';
  };

  test('should render Button correctly', () => {
    const tree = renderer
      .create(<Button name="" clickHandler={clickHandler} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display correct value on the screen', () => {
    render(<Button name="+" clickHandler={clickHandler} />);
    const result = screen.getByText('+');

    expect(result).toBeInTheDocument();
  });
});
