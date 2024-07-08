from typing import List
from fastapi import APIRouter, Path
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from config.database import Session
from schemas.noteSchema import NoteSchema
from services.noteService import NoteService

note_router = APIRouter()

DB = Session()

@note_router.get('/api/note-unarchived', tags=['note'], response_model=List[NoteSchema], status_code=200)
def get_unarchived_notes():
    result = NoteService(DB).get_unarchived_notes()
    return JSONResponse(status_code=200, content=jsonable_encoder(result))

@note_router.get('/api/note-archived', tags=['note'], response_model=NoteSchema, status_code=200)
def get_archived_notes():
    result = NoteService(DB).get_archived_notes()
    return JSONResponse(status_code=200, content=jsonable_encoder(result))

@note_router.get('/api/note/{id}', tags=['note'], response_model=NoteSchema, status_code=200)
def get_note(id: int = Path(ge=1)):
    result = NoteService(DB).get_note(id)
    if not result:
        return JSONResponse(status_code=404, content={'message': 'Note not found.'})
    return JSONResponse(status_code=200, content=jsonable_encoder(result))

@note_router.post('/api/note', tags=['note'], response_model=dict, status_code=201)
def create_note(note: NoteSchema):
    NoteService(DB).create_note(note)
    return JSONResponse(status_code=201, content={'message': 'Note saved'})

@note_router.put('/api/note/{id}', tags=['note'], response_model=dict, status_code=200)
def update_note(id: int, note: NoteSchema):
    result = NoteService(DB).get_note(id)
    if not result:
        return JSONResponse(status_code=404, content={'message': 'Note not found'})
    NoteService(DB).update_note(id, note)
    return JSONResponse(status_code=200, content={'message': 'Note updated'})

@note_router.delete('/api/note/{id}', tags=['note'], response_model=NoteSchema, status_code=200)
def delete_note(id: int = Path(ge=1)):
    result = NoteService(DB).get_note(id)
    if not result:
        return JSONResponse(status_code=404, content={'message': 'Note not found.'})
    NoteService(DB).delete_note(result)
    return JSONResponse(status_code=200, content={'message': 'Note deleted'})
