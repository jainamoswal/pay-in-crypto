import { Hono } from "hono";
import { createBot } from "./bot";
import type { CryptoNetworkMap, Env } from "./types";

const app = new Hono<{ Bindings: Env }>();
export const cryptoNetworks: CryptoNetworkMap = {
  trx: {
    title: "Tron (TRX)",
    emoji: 5406978786140918829n,
    coins: {
      trx: {
        title: "TRX",
        address: "TQh2qLZp7HjvVw5sYy9mLh8b3K8ZsG9zj",
        emoji: 5406978786140918829n
      },
      usdt: {
        title: "USDT",
        address: "TQh2qLZp7HjvVw5sYy9mLh8b3K8ZsG9zj",
        emoji: 5406841020769936275n
      }
    }
  },
  ton: {
    title: "TON (TON)",
    emoji: 5406976471153545018n,
    coins: {
      TON: {
        title: "TON",
        address: "UQC2RnutehG1As9I0x8PQ4oJsxdVo5u4WezeVDCMcrvn-mcv",
        emoji: 5406976471153545018n
      },
      usdt: {
        title: "USDT",
        address: "UQC2RnutehG1As9I0x8PQ4oJsxdVo5u4WezeVDCMcrvn-mcv",
        emoji: 5406841020769936275n
      }
    }
  },
  sol: {
    title: "Solana (SOL)",
    emoji: 5407016676342401484n,
    coins: {
      sol: {
        title: "SOL",
        address: "A1ff8CJPjuWRpVT4eyYvDoZbTndnuG7m351PNgw4PNJR",
        emoji: 5407016676342401484n
      },
      usdt: {
        title: "USDT",
        address: "A1ff8CJPjuWRpVT4eyYvDoZbTndnuG7m351PNgw4PNJR",
        emoji: 5406841020769936275n
      }
    }
  },
  btc: {
    title: "Bitcoin (BTC)",
    emoji: 5409133571233319295n,
    coins: {
      usdt: {
        title: "BTC",
        address: "bc1qfzkh5k9qwj0qpvtpsp457mxxz3sal9aqc22vdf",
        emoji: 5409133571233319295n
      }
    }
  },
  ltc: {
    title: "Litecoin (LTC)",
    emoji: 5407128573125366746n,
    coins: {
      usdt: {
        title: "LTC",
        address: "ltc1qlld0jjeexj2dv76asmxmpr3cgmaulxr3wyar5h",
        emoji: 5407128573125366746n
      }
    }
  },
  eth: {
    title: "Ethereum (ETH)",
    emoji: 5406930321729948822n,
    coins: {
      usdc: {
        title: "ETH",
        address: "0x21AE051b6266a980b5D47c2Ad2DdEE1C738E30AB",
        emoji: 5406930321729948822n
      },
      usdt: {
        title: "USDT",
        address: "0x21AE051b6266a980b5D47c2Ad2DdEE1C738E30AB",
        emoji: 5406841020769936275n
      }
    }
  },
  bsc: {
    title: "Binance Smart Chain (BNB)",
    emoji: 5406671889252781489n,
    coins: {
      bnb: {
        title: "BNB",
        address: "0x21AE051b6266a980b5D47c2Ad2DdEE1C738E30AB",
        emoji: 5406671889252781489n
      },
      usdt: {
        title: "USDT",
        address: "0x21AE051b6266a980b5D47c2Ad2DdEE1C738E30AB",
        emoji: 5406841020769936275n
      }
    }
  },
};

app.post("/bot/:bot_token", (c) => {
  const botToken = c.req.param("bot_token");
  return createBot(c.env, botToken)(c);
});

export default app;