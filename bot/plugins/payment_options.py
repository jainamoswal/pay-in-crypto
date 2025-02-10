import static 
from telegram.ext import ContextTypes
from telegram import Update, InlineKeyboardMarkup, InlineKeyboardButton, CopyTextButton


async def show_crypto_networks(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.callback_query.answer()
    await update.effective_message.edit_text(
        static.SELECT_NETWORK_MESSAGE,
        reply_markup=static.NETWORK_KEYBOARD
    )

async def show_crypto_info(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    query_data = update.callback_query.data.split("_")
    await update.callback_query.answer()

    network, coin = query_data[1], query_data[2] if len(query_data) > 2 else None

    network_data = static.crypto_addresses.get(network, {})
    coins = network_data.get("coins", {})

    if not coins:
        await update.effective_message.edit_text(static.NO_TOKENS_MESSAGE, reply_markup=static.FETCH_AGAIN_BUTTON)
        return

    if coin or len(coins) == 1:
        coin_data = coins.get(coin) or next(iter(coins.values()))
        address = coin_data.get("address", "N/A")
        short_address = f"{address[:4]}...{address[-4:]}"
        await update.effective_message.edit_text(
            (
                f"Network: <b>{network_data.get('title')}</b> <tg-emoji emoji-id={network_data.get('emoji')}>🤖</tg-emoji>\n"
                f"Coin: <b>{coin_data.get('title', '-')}</b> <tg-emoji emoji-id={coin_data.get('emoji')}>🤖</tg-emoji>\n\n"
                f"Wallet address: <code>{address}</code>"
            ),
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton(f"Copy address ({short_address})", copy_text=CopyTextButton(address))],
                [InlineKeyboardButton("🔙 Back", callback_data=f"crypto_{network}" if len(coins) > 1 else "crypto")]
            ])
        )
        return
    
    buttons = [
        InlineKeyboardButton(coin_data.get("title", "Unknown"), callback_data=f"crypto_{network}_{symbol}")
        for symbol, coin_data in coins.items()
    ]
    matrix = [buttons[i:i + 2] for i in range(0, len(buttons), 2)]
    matrix.append([InlineKeyboardButton("🔙 Back", callback_data="crypto")])

    await update.effective_message.edit_text(
        static.SELECT_TOKEN_MESSAGE,
        reply_markup=InlineKeyboardMarkup(matrix)
    )
