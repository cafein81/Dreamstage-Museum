import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PeopleListComponent } from './people-list.component';
import { PersonEditComponent } from './person-edit.component';
import { PeopleService } from './people.service';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [PeopleListComponent, PersonEditComponent],
  providers: [PeopleService],
  exports: [PeopleListComponent, PersonEditComponent]
})
export class PeopleModule {
}
