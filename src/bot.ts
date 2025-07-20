import type { Env } from "./types";
import { registerHandlers } from "./handlers";
import { Bot, Context, webhookCallback } from "grammy";

let botInstance: Bot<Context> | null = null;

export function createBot(env: Env, botToken: string) {
  if (!botInstance) {
    const bot = new Bot<Context>(botToken);
    registerHandlers(bot);
    botInstance = bot;
  }
  return webhookCallback(botInstance, "hono", {secretToken: env.TELEGRAM_SECRET_TOKEN});
}