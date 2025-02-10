import re 
from bot import app 
from static import MONEY_FILTERS
from bot.plugins import payment, payment_options
from telegram.ext import filters, MessageHandler, CallbackQueryHandler


MONEY_FILTER_REGEX = re.compile(r"\b(" + "|".join(re.escape(word) for word in MONEY_FILTERS) + r")\b", re.IGNORECASE)

app.add_handler(MessageHandler(filters.Regex(MONEY_FILTER_REGEX) & ~filters.User([1801212044, 6194427485]), payment.payment_handler))
app.add_handler(CallbackQueryHandler(payment_options.show_crypto_networks, pattern=r"^crypto$"))
app.add_handler(CallbackQueryHandler(payment_options.show_crypto_info, pattern=r"^crypto_(.+?)(?:_(.+))?$"))
