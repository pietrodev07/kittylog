export const colorizeText = (label: string, color: string) => {
  return [color, label, "\x1b[0m"];
};

export const buildCompleteMessage = (labels: Array<Array<string>>) => {
  const completeMessage = [];

  for (const label of labels) {
    completeMessage.push(label.join(""));
  }

  return completeMessage;
};
