import { Routes } from '@angular/router';

import { ShowNotesComponent } from './pages/note/show-notes/show-notes.component';
import { NewNotesComponent } from './pages/note/new-notes/new-notes.component';
import { noteResolver } from './resolvers/note.resolver';

export const routes: Routes = [
    {
        path: '',
        component: ShowNotesComponent
    },
    {
        path: 'note/new',
        component: NewNotesComponent,
        title: 'New note'
    },
    {
        path: 'note/edit/:id',
        component: NewNotesComponent,
        resolve: {
            data: noteResolver
        },
        title: 'Edit note'
    }
];
