import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './example';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('should add a user', () => {
    const user = userManager.addUser('Alice', 'alice@example.com');
    expect(user).toEqual({ id: 1, name: 'Alice', email: 'alice@example.com' });
    expect(userManager.getAllUsers()).toContainEqual(user);
  });

  it('should find a user by ID', () => {
    const user = userManager.addUser('Bob', 'bob@example.com');
    const foundUser = userManager.findUserById(user.id);
    expect(foundUser).toEqual(user);
  });

  it('should return undefined for a non-existent user ID', () => {
    const foundUser = userManager.findUserById(999);
    expect(foundUser).toBeUndefined();
  });

  it('should delete a user by ID', () => {
    const user = userManager.addUser('Charlie', 'charlie@example.com');
    const isDeleted = userManager.deleteUser(user.id);
    expect(isDeleted).toBe(true);
    expect(userManager.getAllUsers()).not.toContainEqual(user);
  });

  it('should return false when trying to delete a non-existent user', () => {
    const isDeleted = userManager.deleteUser(999);
    expect(isDeleted).toBe(false);
  });

  it('should get all users', () => {
    const user1 = userManager.addUser('Alice', 'alice@example.com');
    const user2 = userManager.addUser('Bob', 'bob@example.com');
    expect(userManager.getAllUsers()).toEqual([user1, user2]);
  });
});
