import { kittylog } from "./index";

kittylog.info("Info...");
kittylog.success("Success...");
kittylog.warning("Warn...");
kittylog.error("Error...");
kittylog.error(new Error("Error..."));

kittylog.performance("for loop");
for (let i = 0; i < 100; i++) {}
kittylog.performanceEnd("for loop");

kittylog.performance("while loop");
let i = 0;
while (i < 100) {
  i++;
}
kittylog.performanceEnd("while loop");
