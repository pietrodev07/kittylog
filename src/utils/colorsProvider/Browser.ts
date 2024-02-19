export const colorizeText = (label: string, color: string) => {
  return [`%c${label}`, `color: ${color};`];
};

export const buildCompleteMessage = (labels: Array<Array<string>>) => {
  const completeMessage = [];

  for (let i = 0; i < labels.length; i++) {
    if (i === 0) {
      completeMessage[0] = `${labels[i][0]}`;
    } else {
      completeMessage[0] += ` ${labels[i][0]}`;
    }
    completeMessage.push(labels[i][1]);
  }

  return completeMessage;
};
