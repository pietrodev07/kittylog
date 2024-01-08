export const colorizeText = (label: string, color: string) => {
  return `${color}${label}\x1b[0m`;
};
