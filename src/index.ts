import { Hono } from "hono";
import { createBot } from "./bot";
import type { CryptoNetworkMap, Env } from "./types";

const app = new Hono<{ Bindings: Env }>();
export const cryptoNetworks: CryptoNetworkMap = {
  btc: {
    title: "Bitcoin (BTC)",
    emoji: 5280862672131204613n,
    coins: {
      usdt: {
        title: "BTC",
        address: "bc1qfzkh5k9qwj0qpvtpsp457mxxz3sal9aqc22vdf",
        emoji: 5280862672131204613n
      }
    }
  },
  ton: {
    title: "TON (TON)",
    emoji: 5460720028288557729n,
    coins: {
      TON: {
        title: "TON",
        address: "UQC2RnutehG1As9I0x8PQ4oJsxdVo5u4WezeVDCMcrvn-mcv",
        emoji: 5460720028288557729n
      },
      usdt: {
        title: "USDT",
        address: "UQC2RnutehG1As9I0x8PQ4oJsxdVo5u4WezeVDCMcrvn-mcv",
        emoji: 5280963835790894176n
      }
    }
  },
  eth: {
    title: "Ethereum (ETH)",
    emoji: 5280895833573697242n,
    coins: {
      usdc: {
        title: "ETH",
        address: "0x21AE051b6266a980b5D47c2Ad2DdEE1C738E30AB",
        emoji: 5280895833573697242n
      },
      usdt: {
        title: "USDT",
        address: "0x21AE051b6266a980b5D47c2Ad2DdEE1C738E30AB",
        emoji: 5280963835790894176n
      }
    }
  },
  bsc: {
    title: "Binance Smart Chain (BNB)",
    emoji: 5280535348378609271n,
    coins: {
      bnb: {
        title: "BNB",
        address: "0x21AE051b6266a980b5D47c2Ad2DdEE1C738E30AB",
        emoji: 5280535348378609271n
      },
      usdt: {
        title: "USDT",
        address: "0x21AE051b6266a980b5D47c2Ad2DdEE1C738E30AB",
        emoji: 5280963835790894176n
      }
    }
  },
  sol: {
    title: "Solana (SOL)",
    emoji: 5289516520131535412n,
    coins: {
      sol: {
        title: "SOL",
        address: "A1ff8CJPjuWRpVT4eyYvDoZbTndnuG7m351PNgw4PNJR",
        emoji: 5289516520131535412n
      },
      usdt: {
        title: "USDT",
        address: "A1ff8CJPjuWRpVT4eyYvDoZbTndnuG7m351PNgw4PNJR",
        emoji: 5280963835790894176n
      }
    }
  },
  ltc: {
    title: "Litecoin (LTC)",
    emoji: 5370766044262570957n,
    coins: {
      usdt: {
        title: "LTC",
        address: "ltc1qlld0jjeexj2dv76asmxmpr3cgmaulxr3wyar5h",
        emoji: 5370766044262570957n
      }
    }
  }
};

app.post("/bot/:bot_token", (c) => {
  const botToken = c.req.param("bot_token");
  return createBot(c.env, botToken)(c);
});

export default app;