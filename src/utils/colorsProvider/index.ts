import { Platform, PlatformProviderProtocol } from "../../types";
import * as Browser from "./Browser";
import * as Node from "./Node";

export const getColorsProvider = (platform: Platform): PlatformProviderProtocol => {
  switch (platform) {
    case "BROWSER": {
      return Browser;
    }
    case "NODE": {
      return Node;
    }
  }
};
