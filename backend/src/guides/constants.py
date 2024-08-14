from enum import Enum


class RetrieveOrder(str, Enum):
    ascending = "asc"
    descending = "desc"
