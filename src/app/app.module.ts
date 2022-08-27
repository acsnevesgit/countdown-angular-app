import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms' // for 2-way binding -> used to share the data from component to template and vice versa
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

// Contains metadata like components, service providers, and other code files whose scope is here defined
// Can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules
@NgModule({
  declarations: [AppComponent], // components, directives, and pipes that belong to this NgModule
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [], // services to become accessible in all parts of the application
  bootstrap: [AppComponent], // main application view that hosts all the other application views
})
export class AppModule {}
