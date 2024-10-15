import { logout } from '../js/api/auth/logout';
import { remove } from '../js/storage/index'; // Mock this to test calls

// Mock the storage.remove function
jest.mock('../js/storage/index', () => ({
  remove: jest.fn(),
}));

describe('Logout API', () => {
  beforeEach(() => {
    // Clear the mocks before each test
    jest.clearAllMocks();
  });

  it('should remove the token and profile from storage', () => {
    // Call the logout function
    logout();

    // Check if remove was called correctly for token and profile
    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
