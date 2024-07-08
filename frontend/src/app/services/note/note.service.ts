import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private urls = {
    api: environment.api.apiUrl,
    notes: 'api/note',
    notesUnarchived: 'api/note-unarchived',
    notesArchived: 'api/note-archived',
  }

  constructor(
    private http: HttpClient
  ) { }

  getUnarchivedNotes() {
    return this.http.get(`${this.urls.api}${this.urls.notesUnarchived}`).pipe(res => res)
  }

  getArchivedNotes() {
    return this.http.get(`${this.urls.api}${this.urls.notesArchived}`).pipe(res => res)
  }

  getNote(id: any) {
    return this.http.get(`${this.urls.api}${this.urls.notes}/${id}`).pipe(res => res)
  }

  saveNote(data: any) {
    return this.http.post(`${this.urls.api}${this.urls.notes}`, data).pipe(res => res)
  }

  updateNote(id: number, data: any) {
    return this.http.put(`${this.urls.api}${this.urls.notes}/${id}`, data).pipe(res => res)
  }

  deleteNote(id: number) {
    return this.http.delete(`${this.urls.api}${this.urls.notes}/${id}`).pipe(res => res)
  }
}
