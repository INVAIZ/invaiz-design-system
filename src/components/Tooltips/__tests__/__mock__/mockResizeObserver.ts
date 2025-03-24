// eslint-disable-next-line import/prefer-default-export
export const initializeObserver = () => {
  Object.defineProperty(global, "ResizeObserver", {
    value: vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    })),
  });
  Object.defineProperty(global, "IntersectionObserver", {
    value: vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    })),
  });
};
