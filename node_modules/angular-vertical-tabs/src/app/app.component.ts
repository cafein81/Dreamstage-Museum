import { Component, OnInit, ViewChild } from '@angular/core';
import { IPerson, PeopleService } from './people/people.service';
import { VerticalTabsComponent } from '../../projects/vertical-tabs/src/lib/vertical-tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('personEdit') personEditTemplate;
  @ViewChild(VerticalTabsComponent) tabsComponent: VerticalTabsComponent;
  people: IPerson[];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService
      .getPeople()
      .subscribe(data => this.people = data);
  }

  onEditPerson(person) {
    this.tabsComponent
      .openTab(
        `Editing ${person.name}`,
        this.personEditTemplate,
        person,
        true
      );
  }

  onAddPerson() {
    this.tabsComponent
      .openTab(
        'New Person',
        this.personEditTemplate,
        {},
        true
      );
  }

  onPersonFormSubmit(dataModel) {
    if (dataModel.id > 0)
      this.people = this.people.map(person =>
        person.id === dataModel.id ? dataModel : person
      );
    else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    this.tabsComponent.closeActiveTab();
  }
}
