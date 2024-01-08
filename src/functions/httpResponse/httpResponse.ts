import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const httpResponse = (response: Response) => {
  const timestamp = new Date().toLocaleTimeString();

  const label = colorizeText("[HTTP RESPONSE]", COLORS.blue);
  const timestampLabel = colorizeText(timestamp, COLORS.magenta);

  const status = colorizeText("Status:", COLORS.green);
  const headers = colorizeText("Headers:", COLORS.cyan);
  const url = colorizeText("URL:", COLORS.magenta);
  const type = colorizeText("Type;", COLORS.yellow);
  const ok = colorizeText("Ok:", COLORS.red);
  const cookies = colorizeText("Cookies:", COLORS.blue);

  console.log(`${label} - ${timestampLabel}`);
  console.log();

  console.log(`${url} ${response.url}`);
  console.log(`${ok} ${response.ok}`);
  console.log(`${type} ${response.type}`);
  console.log(`${status} ${response.status}`);
  console.log(`${headers}`, response.headers);
  console.log(`${cookies}`, response.headers.get("cookies"));
};
