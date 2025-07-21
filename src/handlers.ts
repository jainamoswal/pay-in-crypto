import { Bot, Context } from "grammy";
import { handlePay, handleNoPay } from "./plugins/payments";
import { handleNetworks, handleCryptoPay, handleNetworkPay } from "./plugins/crypto";

const keywords = [
  "payment", "pay", "crypto", "wallet address",
  "address", "wallet", "addy", "money", "owe", "eth", "sol",
  "btc", "bnb", "usdt", "ltc", "trc", "tron"
];

const regex = new RegExp(`\\b(?:${keywords.join("|")})\\b`, "i");

export function registerHandlers(bot: Bot<Context>) {
    bot.on('business_message').filter(
      ctx => regex.test(ctx.msg.text || ctx.msg.caption || ""), 
      handlePay
    );
    bot.command("pay", handlePay);
    bot.callbackQuery("no", handleNoPay);
    bot.callbackQuery("networks", handleNetworks);
    bot.callbackQuery(/^pay_([^_]+)$/, handleCryptoPay);
    bot.callbackQuery(/^pay_(.+)_(.+)$/, handleNetworkPay);
}
