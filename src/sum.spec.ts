import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should correctly add two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should correctly add a positive and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('should correctly add two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it('should return the same number when adding zero', () => {
    expect(sum(7, 0)).toBe(7);
    expect(sum(0, 7)).toBe(7);
  });

  it('should correctly add two zero numbers', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
