import config
from bot import app, handlers


if __name__ == "__main__":
    if config.PORT:
        app.run_webhook(
            listen="0.0.0.0",
            port=config.PORT,
            drop_pending_updates=True,
            webhook_url=config.APP_URL,
            secret_token=config.SECRET_KEY
        )
    else:
        app.run_polling()
