import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const httpResponse = (response: Response) => {
  const { colorizeText, buidlCompleteMessage } = colorsProvider;
  const timestamp = new Date().toLocaleTimeString();

  const label = colorizeText("[HTTP RESPONSE]", COLORS.blue);
  const timestampLabel = colorizeText(timestamp, COLORS.magenta);

  const status = colorizeText("Status:", COLORS.green);
  const headers = colorizeText("Headers:", COLORS.cyan);
  const url = colorizeText("URL:", COLORS.magenta);
  const type = colorizeText("Type;", COLORS.yellow);
  const ok = colorizeText("Ok:", COLORS.red);
  const cookies = colorizeText("Cookies:", COLORS.blue);

  console.log(...buidlCompleteMessage([label, timestampLabel]));
  console.log();

  console.log(...buidlCompleteMessage([url]), response.url);
  console.log(...buidlCompleteMessage([ok]), response.ok);
  console.log(...buidlCompleteMessage([type]), response.type);
  console.log(...buidlCompleteMessage([status]), response.status);
  console.log(...buidlCompleteMessage([headers]), response.headers);
  console.log(...buidlCompleteMessage([cookies]), response.headers.get("cookies"));
};
