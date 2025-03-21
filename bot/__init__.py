import config 
from telegram.constants import ParseMode
from telegram.ext import ApplicationBuilder, Defaults

app = (
    ApplicationBuilder()
    .token(config.BOT_TOKEN)
    .defaults(Defaults(disable_web_page_preview=True, parse_mode=ParseMode.HTML))
    .build()
)
