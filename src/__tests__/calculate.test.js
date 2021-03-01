import calculate from '../logic/calculate';

describe('Test methods of the operate.js module', () => {
  test('+/- button should make a positive number negative', () => {
    const result = calculate({ total: '20', next: '', operate: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual('-20');
  });

  test('+/- button should make a negative number positive', () => {
    const result = calculate({ total: '-30', next: '', operate: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual('30');
  });

  test('% button should return a percentage of the first number', () => {
    const result = calculate({ total: '100', next: '', operate: '' }, '%');
    const { total } = result;
    expect(total).toEqual('1');
  });

  test('= button should return first num as a result', () => {
    const result = calculate({ total: '', next: '50', operate: '' }, '=');
    const { total } = result;
    expect(total).toEqual('50');
  });

  test('AC button should clear all operations and total back to 0', () => {
    const result = calculate({ total: '100', next: '', operation: '' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('. button should add decimal to numbers', () => {
    const result = calculate({ total: '2', next: '', operate: '' }, '.');
    const { total } = result;
    expect(total).toEqual('2.');
  });
});
