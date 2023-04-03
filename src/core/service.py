import os

from core.constants import MEDIA_ROOT


def create_media_root():
    if not os.path.exists(MEDIA_ROOT):
        os.mkdir(MEDIA_ROOT)
