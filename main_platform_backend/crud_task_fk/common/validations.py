import uuid


def is_valid_uuid(uuid_str):
    try:
        _id = uuid.UUID(uuid_str)
        return _id
    except:
        return None
