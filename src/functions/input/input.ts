export const input = (promptText: string) => {
  return new Promise(resolve => {
    process.stdin.setEncoding("utf-8");
    process.stdout.write(`${promptText}·`);
    process.stdin.once("data", (data: string) => {
      process.stdin.pause();
      resolve(data.trim());
    });
  });
};
