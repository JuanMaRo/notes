import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { NoteService } from '../services/note/note.service';

export const noteResolver: ResolveFn<Object> = (route, state) => {
  const noteId = route.paramMap.get('id');
  return inject(NoteService).getNote(noteId);
};