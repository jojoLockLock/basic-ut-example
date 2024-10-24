import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(2, -3)).toBe(-1);
  });

  it('should return the sum of a number and zero', () => {
    expect(sum(2, 0)).toBe(2);
  });

  it('should return the sum of zero and zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
