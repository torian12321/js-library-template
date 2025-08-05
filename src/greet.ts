export const greet = (name?: string): string => {
  if (!name) {
    return 'Hello! Welcome to the example project.';
  }

  return `Hello ${name}! Welcome to the example project.`;
};
