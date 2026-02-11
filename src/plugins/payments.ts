import { Context, InlineKeyboard } from "grammy";

const startMessage = `<b>Looks like you wanna pay. Do you ?</b> <tg-emoji emoji-id='5361813743279821319'>🤔</tg-emoji> 

<tg-emoji emoji-id='5274099962655816924'>❗️</tg-emoji> Addresses are updated frequntly.
<tg-emoji emoji-id='5420323339723881652'>⚠️</tg-emoji> <u> Always refresh this message to ensure you're using the latest address.</u>

<blockquote>Beep boop, <b>I'm a Bot</b>! <tg-emoji emoji-id='5317036836613272917'>🤖</tg-emoji></blockquote>
`

export async function handlePay(ctx: Context) {
    const keyboard = new InlineKeyboard()
        .text("Pay in Crypto 💸", "networks")
        .row()
        .text("Nah ❌", "no");

    await ctx.reply(startMessage, 
        {
            parse_mode: "HTML",
            reply_markup: keyboard,
            reply_parameters: { message_id: ctx.msgId! },
            business_connection_id: ctx.businessConnectionId
        }
    );
}

export async function handleNoPay(ctx: Context) {
    await ctx.answerCallbackQuery({text: "Alright, maybe some other day! 🫡", show_alert: true});
    await ctx.deleteBusinessMessages([ctx.msgId!]);
};