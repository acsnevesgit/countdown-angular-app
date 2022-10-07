import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { DateDiff } from './services/timediff.service'
import { StorageService } from './services/storage.service'
import { NameInputComponent } from './components/name-input/name-input.component'
import { DateInputComponent } from './components/date-input/date-input.component'

@NgModule({
  declarations: [AppComponent, DateInputComponent, NameInputComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [DateDiff, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
