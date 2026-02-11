import { cryptoNetworks } from "../index";
import { Context, InlineKeyboard } from "grammy";


export async function handleNetworks(ctx: Context) {
    const keyboard = new InlineKeyboard();

    Object.keys(cryptoNetworks).forEach((network) => {
        const networkInfo = cryptoNetworks[network];
        keyboard.text(networkInfo.title, `pay_${network}`).icon(networkInfo.emoji.toString());
        keyboard.row();
    });

    await ctx.editMessageText(
        "<tg-emoji emoji-id='5278467510604160626'>🔗</tg-emoji> Choose a network!", {
        parse_mode: "HTML",
        reply_markup: keyboard,
        business_connection_id: ctx.businessConnectionId
    }
    );
}

export async function handleCryptoPay(ctx: Context) {
    const network = ctx.match![1];
    const coinInfo = cryptoNetworks[network];

    if (!coinInfo) {
        await ctx.editMessageText("<tg-emoji emoji-id='5278467510604160626'>❌</tg-emoji> Network not found!", {
            parse_mode: "HTML",
            business_connection_id: ctx.businessConnectionId,
            reply_markup: new InlineKeyboard().text("Back 🔙", "networks"),
        });
        return;
    }

    const keyboard = new InlineKeyboard()
    const coins = Object.entries(coinInfo.coins);
    for (let i = 0; i < coins.length; i += 2) {
        const [coin1, details1] = coins[i];
        keyboard.text(details1.title, `pay_${network}_${coin1}`);

        if (i + 1 < coins.length) {
            const [coin2, details2] = coins[i + 1];
            keyboard.text(details2.title, `pay_${network}_${coin2}`);
        }
        keyboard.row();
    }
    keyboard.text("Back 🔙", "networks");

    await ctx.editMessageText(
        `<tg-emoji emoji-id='5269254848703902904'>🪙</tg-emoji> Select a token!`, {
        parse_mode: "HTML",
        reply_markup: keyboard,
        business_connection_id: ctx.businessConnectionId
    }
    );
}


export async function handleNetworkPay(ctx: Context) {
    const [_, network, coin] = ctx.match!;
    const networkInfo = cryptoNetworks[network];
    const coinInfo = networkInfo.coins[coin];

    if (!coinInfo) {
        await ctx.editMessageText("<tg-emoji emoji-id='5269254848703902904'>❌</tg-emoji> Coin not found!", {
            parse_mode: "HTML",
            business_connection_id: ctx.businessConnectionId,
            reply_markup: new InlineKeyboard().text("Back 🔙", `pay_${network}`),
        });
        return;
    }

    const addressDisplay = `${coinInfo.address.slice(0, 4)}...${coinInfo.address.slice(-4)}`;
    const keyboard = new InlineKeyboard()
        .copyText(`Copy ${addressDisplay}`, coinInfo.address)
        .row()
        .text("Back 🔙", `pay_${network}`);


    await ctx.editMessageText(
        `<b>Network</b>: ${networkInfo.title} <tg-emoji emoji-id='${networkInfo.emoji}'>🔗</tg-emoji>\n` +
        `<b>Token</b>: ${coinInfo.title} <tg-emoji emoji-id='${coinInfo.emoji}'>🪙</tg-emoji>\n\n` +
        `<b>Address</b>: <code>${coinInfo.address}</code>\n\n` + 
        `<tg-emoji emoji-id='5359319827569727155'>🧐</tg-emoji>`,
        {
            parse_mode: "HTML",
            reply_markup: keyboard,
            business_connection_id: ctx.businessConnectionId,
        }
    );
}