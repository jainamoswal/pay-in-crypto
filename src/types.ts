export interface Env {
  TELEGRAM_SECRET_TOKEN: string;
}

export type CoinInfo = {
  title: string;
  address: string;
  emoji: bigint;
};

export type NetworkInfo = {
  title: string;
  emoji: bigint;
  coins: Record<string, CoinInfo>;
};

export type CryptoNetworkMap = Record<string, NetworkInfo>;
