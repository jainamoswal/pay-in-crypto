import { Hono } from "hono";
import { createBot } from "./bot";
import type { CryptoNetworkMap, Env } from "./types";

const app = new Hono<{ Bindings: Env }>();
export const cryptoNetworks: CryptoNetworkMap = {
  ton: {
    title: "Ton (TON)",
    emoji: 5406976471153545018n,
    coins: {
      TON: {
        title: "TON",
        address: "UQARb-z_g6ap9iqMlmuibZ6naKMEZPwomMxIYZmb8wo611Gd",
        emoji: 5406976471153545018n
      },
      usdt: {
        title: "USDT",
        address: "UQARb-z_g6ap9iqMlmuibZ6naKMEZPwomMxIYZmb8wo611Gd",
        emoji: 5406841020769936275n
      }
    }
  },
  trx: {
    title: "Tron (TRX)",
    emoji: 5406978786140918829n,
    coins: {
      trx: {
        title: "TRX",
        address: "TLoMytWUQbQbqELcffJPj1tfN8Rtca2ydC",
        emoji: 5406978786140918829n
      },
      usdt: {
        title: "USDT",
        address: "TLoMytWUQbQbqELcffJPj1tfN8Rtca2ydC",
        emoji: 5406841020769936275n
      },
      usdc: {
        title: "USDC",
        address: "TLoMytWUQbQbqELcffJPj1tfN8Rtca2ydC",
        emoji: 5406575600380974539n
      }
    }
  },
  sol: {
    title: "Solana (SOL)",
    emoji: 5407016676342401484n,
    coins: {
      sol: {
        title: "SOL",
        address: "A8ZNf3641MCzFTHN5h3Y4giWUbdCcRMqdu73EA5SHGEa",
        emoji: 5407016676342401484n
      },
      usdt: {
        title: "USDT",
        address: "A8ZNf3641MCzFTHN5h3Y4giWUbdCcRMqdu73EA5SHGEa",
        emoji: 5406841020769936275n
      },
      usdc: {
        title: "USDC",
        address: "A8ZNf3641MCzFTHN5h3Y4giWUbdCcRMqdu73EA5SHGEa",
        emoji: 5406575600380974539n
      }
    }
  },
  btc: {
    title: "Bitcoin (BTC)",
    emoji: 5409133571233319295n,
    coins: {
      usdt: {
        title: "BTC",
        address: "bc1qa7lh6c3rew3tawxpu6gfyupx54hcn4uges36qt",
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
        address: "ltc1q5fgf58v386yvrrmkeav478h4vjgrkr83q9u7vd",
        emoji: 5407128573125366746n
      }
    }
  },
  eth: {
    title: "Ethereum (ETH)",
    emoji: 5406930321729948822n,
    coins: {
      eth: {
        title: "ETH",
        address: "0x000cf1Cd76815f0bc3A87Ea9806bC7b259676176",
        emoji: 5406930321729948822n
      },
      usdt: {
        title: "USDT",
        address: "0x000cf1Cd76815f0bc3A87Ea9806bC7b259676176",
        emoji: 5406841020769936275n
      },
      usdc: {
        title: "USDC",
        address: "0x000cf1Cd76815f0bc3A87Ea9806bC7b259676176",
        emoji: 5406575600380974539n
      }
    }
  },
  bsc: {
    title: "Binance Smart Chain (BNB)",
    emoji: 5406671889252781489n,
    coins: {
      bnb: {
        title: "BNB",
        address: "0x000cf1Cd76815f0bc3A87Ea9806bC7b259676176",
        emoji: 5406671889252781489n
      },
      usdt: {
        title: "USDT",
        address: "0x000cf1Cd76815f0bc3A87Ea9806bC7b259676176",
        emoji: 5406841020769936275n
      },
      usdc: {
        title: "USDC",
        address: "0x000cf1Cd76815f0bc3A87Ea9806bC7b259676176",
        emoji: 5406575600380974539n
      }
    }
  },
};

app.post("/bot/:bot_token", (c) => {
  const botToken = c.req.param("bot_token");
  return createBot(c.env, botToken)(c);
});

export default app;