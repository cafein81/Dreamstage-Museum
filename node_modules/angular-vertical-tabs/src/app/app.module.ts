import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalTabsModule } from '../../projects/vertical-tabs/src/lib/vertical-tabs.module';
import { PeopleModule } from './people/people.module';
import { PeopleService } from './people/people.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VerticalTabsModule.forRoot(),
    PeopleModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
