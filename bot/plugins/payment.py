import static
from telegram import Update
from telegram.ext import ContextTypes


async def payment_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    match = context.match.group(1)
    await update.effective_message.reply_text(
        static.DO_YOU_WANT_TO_PAY_MESSAGE, 
        do_quote=update.effective_message.build_reply_arguments(quote=match),
        reply_markup=static.PAYMENT_KEYBOARD
    )