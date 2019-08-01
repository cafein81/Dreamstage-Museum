import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { MultimediaComponent } from "./multimedia/multimedia.component";
import { EnterMuseumComponent } from "./enter-museum/enter-museum.component";
import { FurtherReadingComponent } from "./further-reading/further-reading.component";
import { DrHobsonComponent } from "./dr-hobson/dr-hobson.component";
import { ThePropertyComponent } from "./the-property/the-property.component";
import { TheBarnComponent } from "./the-barn/the-barn.component";
import { ATourComponent } from "./a-tour/a-tour.component";
import { VideoFilesComponent } from "./video-files/video-files.component";
import { AudioFilesComponent } from "./audio-files/audio-files.component";
import { EntryComponent } from "./entry/entry.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { StorageComponent } from "./storage/storage.component";
import { DreamstageComponent } from "./dreamstage/dreamstage.component";
import { OfficeComponent } from "./office/office.component";
import { LibraryComponent } from "./library/library.component";
import { RecomReadingsComponent } from "./recom-readings/recom-readings.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { MatCardModule } from "@angular/material/card";
import { IgxCarouselModule } from "igniteui-angular";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { IgxBottomNavModule } from "igniteui-angular";
import { Angular2ImageGalleryModule } from "angular2-image-gallery";
import { MatVideoModule } from "mat-video";
import { NgxAudioPlayerModule } from "ngx-audio-player";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatStepperModule } from "@angular/material/stepper";
import { ParticlesModule } from "angular-particle";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxGalleryModule } from "ngx-gallery";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    MultimediaComponent,
    EnterMuseumComponent,
    FurtherReadingComponent,
    DrHobsonComponent,
    ThePropertyComponent,
    TheBarnComponent,
    ATourComponent,
    VideoFilesComponent,
    AudioFilesComponent,
    EntryComponent,
    GalleryComponent,
    StorageComponent,
    DreamstageComponent,
    OfficeComponent,
    LibraryComponent,
    RecomReadingsComponent,
    NavComponent,
    FooterComponent,
    HomepageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    IgxCarouselModule,
    MatGridListModule,
    MatDividerModule,
    IgxBottomNavModule,
    Angular2ImageGalleryModule,
    MatVideoModule,
    NgxAudioPlayerModule,
    MatSidenavModule,
    MatStepperModule,
    ParticlesModule,
    FlexLayoutModule,
    NgxGalleryModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
