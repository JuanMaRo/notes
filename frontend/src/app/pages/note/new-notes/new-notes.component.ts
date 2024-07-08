import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { NoteService } from '../../../services/note/note.service';

@Component({
  selector: 'app-new-notes',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, RouterModule],
  templateUrl: './new-notes.component.html',
  styleUrl: './new-notes.component.scss'
})
export class NewNotesComponent {

  noteId: any;
  note: any;
  noteForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get('id');
    if (this.noteId) {
      this.note = this.route.snapshot.data['data'];
    }
    this.initNoteForm();
  }

  initNoteForm() {
    this.noteForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ]],
      content: [''],
      archived: [false]
    });
    if ( this.note) {
      this.noteForm.patchValue(this.note);
    }
  }

  saveNote() {
    if (this.noteId) {
      this.noteService.updateNote(this.noteId, this.noteForm.value).subscribe({
        next: (result) => {
          console.log(result)
          this.toastrService.success('Note updated', 'Confirmation')
          this.router.navigate(['']);
        },
        error: (err) => {
          console.log(err)
        }
      });
    } else {
      this.noteService.saveNote(this.noteForm.value).subscribe({
        next: (result) => {
          console.log(result)
          this.toastrService.success('Note saved', 'Confirmation')
          this.router.navigate(['']);
        },
        error: (err) => {
          console.log(err)
        }
      });
    }
  }
}
