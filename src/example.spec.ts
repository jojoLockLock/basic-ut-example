import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './example';

describe('UserManager', () => {
    let userManager: UserManager;

    beforeEach(() => {
        userManager = new UserManager();
    });

    it('should add a new user', () => {
        const user = userManager.addUser('Alice', 'alice@example.com');
        expect(user).toEqual({ id: 1, name: 'Alice', email: 'alice@example.com' });
    });

    it('should find a user by id', () => {
        const user = userManager.addUser('Bob', 'bob@example.com');
        const foundUser = userManager.findUserById(user.id);
        expect(foundUser).toEqual(user);
    });

    it('should return undefined for non-existent user id', () => {
        const foundUser = userManager.findUserById(999);
        expect(foundUser).toBeUndefined();
    });

    it('should delete a user by id', () => {
        const user = userManager.addUser('Charlie', 'charlie@example.com');
        const result = userManager.deleteUser(user.id);
        expect(result).toBe(true);
        expect(userManager.findUserById(user.id)).toBeUndefined();
    });

    it('should return false when trying to delete a non-existent user', () => {
        const result = userManager.deleteUser(999);
        expect(result).toBe(false);
    });

    it('should retrieve all users', () => {
        const user1 = userManager.addUser('Alice', 'alice@example.com');
        const user2 = userManager.addUser('Bob', 'bob@example.com');
        const users = userManager.getAllUsers();
        expect(users).toEqual([user1, user2]);
    });

    it('should return an empty array when no users are present', () => {
        const users = userManager.getAllUsers();
        expect(users).toEqual([]);
    });
});
