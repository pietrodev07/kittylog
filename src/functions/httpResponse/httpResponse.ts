import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const httpResponse = (response: Response) => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;
  const timestamp = new Date().toLocaleTimeString();

  const label = colorizeText("[HTTP RESPONSE]", COLORS.blue);
  const timestampLabel = colorizeText(timestamp, COLORS.magenta);

  const status = colorizeText("Status:", COLORS.green);
  const headers = colorizeText("Headers:", COLORS.cyan);
  const url = colorizeText("URL:", COLORS.magenta);
  const type = colorizeText("Type;", COLORS.yellow);
  const ok = colorizeText("Ok:", COLORS.red);
  const cookies = colorizeText("Cookies:", COLORS.blue);

  console.log(...buildCompleteMessage([label, timestampLabel]));
  console.log();

  console.log(...buildCompleteMessage([url]), response.url);
  console.log(...buildCompleteMessage([ok]), response.ok);
  console.log(...buildCompleteMessage([type]), response.type);
  console.log(...buildCompleteMessage([status]), response.status);
  console.log(...buildCompleteMessage([headers]), response.headers);
  console.log(...buildCompleteMessage([cookies]), response.headers.get("cookies"));
};
