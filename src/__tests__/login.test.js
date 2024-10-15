// Mock the dependencies used in login function
import { login } from '../js/api/auth/login';
import { save } from '../js/storage/index'; // Mock this to test calls

jest.mock('../js/storage/index', () => ({
  save: jest.fn(),
  load: jest.fn(), // Mock the 'load' function
}));

// Mock the fetch API globally
global.fetch = jest.fn();

describe('Login API', () => {
  beforeEach(() => {
    // Clear the mocks before each test
    jest.clearAllMocks();
  });

  it('should store a token and profile with valid credentials', async () => {
    const mockResponse = {
      accessToken: 'fake-token',
      name: 'John Doe',
    };

    // Mock the successful API response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    // Call the login function
    const result = await login('validEmail@example.com', 'validPassword');

    // Assertions to check if save was called correctly
    expect(save).toHaveBeenCalledWith('token', 'fake-token');
    expect(save).toHaveBeenCalledWith('profile', { name: 'John Doe' });

    // Check the returned profile
    expect(result).toEqual({ name: 'John Doe' });
  });

  it('should throw an error with invalid credentials', async () => {
    // Mock an unsuccessful response
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized',
    });

    // Expect the login function to throw an error
    await expect(login('invalidEmail@example.com', 'wrongPassword')).rejects.toThrow('Unauthorized');
  });
});
