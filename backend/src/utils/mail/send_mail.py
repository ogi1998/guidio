import logging
from pathlib import Path
from typing import Dict, Any

from fastapi import HTTPException, status
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from pydantic import EmailStr

from src.core.config import settings
from src import config

logging.basicConfig(level=logging.DEBUG)

conf = ConnectionConfig(
    MAIL_USERNAME=settings.SMTP_USER if settings.SMTP_USER else '',
    MAIL_FROM=settings.EMAIL_TEST_USER,
    MAIL_PASSWORD=settings.SMTP_PASSWORD if settings.SMTP_PASSWORD else '',
    MAIL_SERVER=settings.SMTP_HOST if settings.SMTP_HOST else '',
    MAIL_PORT=settings.SMTP_PORT if settings.SMTP_PORT else 587,
    MAIL_STARTTLS=settings.SMTP_TLS if settings.SMTP_TLS else True,
    MAIL_SSL_TLS=settings.SMTP_SSL if settings.SMTP_SSL else False,
    TEMPLATE_FOLDER=Path(__file__).parent.parent.parent / 'templates/mail/',
    SUPPRESS_SEND=config.SUPPRESS_SEND if config.SUPPRESS_SEND else 0,
)


async def send_mail(subject: str, recipients: list[EmailStr], body: Dict[str, Any],
                    template_name: str) -> None:
    message = MessageSchema(
        subject=subject,
        recipients=recipients,
        template_body=body,
        subtype=MessageType.html,
    )
    try:
        fm = FastMail(conf)
        await fm.send_message(message, template_name=template_name)
        logging.info("Email sent successfully")
    except Exception as e:
        logging.error(f"Sending email failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Sending email failed"
        )
