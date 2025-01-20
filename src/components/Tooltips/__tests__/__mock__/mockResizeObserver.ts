// eslint-disable-next-line import/prefer-default-export
export const initializeObserver = () => {
  Object.defineProperty(global, "ResizeObserver", {
    value: jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })),
  });
  Object.defineProperty(global, "IntersectionObserver", {
    value: jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })),
  });
};
