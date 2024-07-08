from config.database import Base
from sqlalchemy import Boolean, Column, Integer, String

class NoteModel(Base):

    __tablename__ = 'note'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    content = Column(String)
    archived = Column(Boolean)
