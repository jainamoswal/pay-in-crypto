import json
from telegram import InlineKeyboardButton, InlineKeyboardMarkup

MONEY_FILTERS = [
    "payment", "pay", "crypto", "wallet address", 
    "address", "wallet", "addy", "money", "owe", "eth", "sol", 
    "btc", "bnb", "usdt", "ltc", "trc", "tron"
]

NO_TOKENS_MESSAGE = "No tokens available for this network"
SELECT_TOKEN_MESSAGE = "<tg-emoji emoji-id=5197577329206894810>🤖</tg-emoji> Select a token to pay with"
SELECT_NETWORK_MESSAGE = "<tg-emoji emoji-id=5375296873982604963>🤖</tg-emoji> Select a network to pay with"
DO_YOU_WANT_TO_PAY_MESSAGE = """
Looks like you wanna pay. Do you ?

<blockquote>beep boop, I'm a bot <tg-emoji emoji-id="5019726744978981602">🤖</tg-emoji></blockquote>
"""

PAYMENT_KEYBOARD = InlineKeyboardMarkup([
    [InlineKeyboardButton("Pay via Crypto", callback_data="crypto")],
])

FETCH_AGAIN_BUTTON = InlineKeyboardMarkup([
    [InlineKeyboardButton("Reload", callback_data="crypto")],
])

with open("addresses.json") as file:
    crypto_addresses: dict[str, dict] = json.load(file)

def create_network_buttons():
    return InlineKeyboardMarkup(
        [[InlineKeyboardButton(network_data.get('title'), callback_data=f"crypto_{network}")] for network, network_data in crypto_addresses.items()]
    )

NETWORK_KEYBOARD = create_network_buttons()