/**
 * Greet a user
 * @param name - The name of the user
 * @returns A greeting message
 */
export const greet = (name?: string): string => {
  if (!name) {
    return 'Hello! Welcome to the example project.';
  }

  return `Hello ${name}! Welcome to the example project.`;
};
