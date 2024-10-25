import { describe, it, expect } from 'vitest';
import { addNumbers } from './fuck';

describe('addNumbers', () => {
  it('should return the sum of two positive numbers', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(addNumbers(5, -2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(addNumbers(-3, -6)).toBe(-9);
  });

  it('should return zero when both numbers are zero', () => {
    expect(addNumbers(0, 0)).toBe(0);
  });

  it('should return the correct sum when one number is zero', () => {
    expect(addNumbers(0, 7)).toBe(7);
  });
});
