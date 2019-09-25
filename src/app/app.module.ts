import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatRadioModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatChipsModule,
  MatTooltipModule,
  MatExpansionModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatPaginatorModule,
  MatNativeDateModule
} from "@angular/material";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconComponent } from "./components/icon/icon.component";
import { ModalpopUpComponent } from "./components/modalpop-up/modalpop-up.component";

@NgModule({
  declarations: [AppComponent, IconComponent, ModalpopUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatStepperModule,
    MatButtonToggleModule
  ],
  entryComponents: [ModalpopUpComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
