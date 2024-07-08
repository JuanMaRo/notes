import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { NoteService } from '../../../services/note/note.service';

@Component({
  selector: 'app-show-notes',
  standalone: true,
  imports: [NgFor, RouterModule, NgIf],
  templateUrl: './show-notes.component.html',
  styleUrl: './show-notes.component.scss'
})
export class ShowNotesComponent implements OnInit {
  
  noteListUnarchived: any;
  noteListArchived: any;
  errorMessage: string = '';

  constructor(
    private noteService: NoteService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUnarchivedNotes()
    this.getArchivedNotes()
  }

  getUnarchivedNotes() {
    this.noteService.getUnarchivedNotes().subscribe({
      next: (result) => {
        this.noteListUnarchived = result;
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }

  getArchivedNotes() {
    this.noteService.getArchivedNotes().subscribe({
      next: (result) => {
        this.noteListArchived = result;
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }

  deleteNote(noteId:number) {
    this.noteService.deleteNote(noteId).subscribe({
      next: (result) => {
        this.getUnarchivedNotes();
        this.getArchivedNotes();
        console.log(result)
        this.toastrService.error('Note deleted', 'Confirmation');
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }

}
