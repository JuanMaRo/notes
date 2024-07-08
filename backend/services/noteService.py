from models.noteModel import NoteModel
from schemas.noteSchema import NoteSchema

class NoteService():

    def __init__(self, db):
        self.db = db

    def get_unarchived_notes(self):
        result = self.db.query(NoteModel).filter(NoteModel.archived.is_(False)).all()
        return result

    def get_archived_notes(self):
        result = self.db.query(NoteModel).filter(NoteModel.archived.is_(True)).all()
        return result

    def get_note(self, id):
        result = self.db.query(NoteModel).filter(NoteModel.id == id).first()
        return result

    def create_note(self, note: NoteSchema):
        new_note = NoteModel(**note.model_dump())
        self.db.add(new_note)
        self.db.commit()
        return

    def update_note(self, id, note: NoteSchema):
        result = self.db.query(NoteModel).filter(NoteModel.id == id).first()
        result.title = note.title
        result.content = note.content
        result.archived = note.archived
        self.db.commit()
        return

    def delete_note(self, note: NoteSchema):
        self.db.delete(note)
        self.db.commit()
        return
