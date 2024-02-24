export const box = (...message: string[]): void => {
  let border = "──"; // We put 2 characters to have some distance from the edge

  for (let i = 0; i < message.join(" ").length; i++) {
    border += "─";
  }

  console.log(`╭${border}╮\n│ ${message.join(" ")} │\n╰${border}╯`);
};
