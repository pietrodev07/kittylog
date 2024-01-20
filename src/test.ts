import { kittylog } from "./index";

kittylog.info("Info...");
kittylog.success("Success...");
kittylog.warning("Warn...");
kittylog.error("Error...");
kittylog.error(new Error("Error..."));
