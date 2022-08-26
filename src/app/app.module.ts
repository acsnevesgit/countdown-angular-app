import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// Contains metadata like components, service providers, and other code files whose scope is here defined
// Can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules
@NgModule({
  declarations: [AppComponent], // components, directives, and pipes that belong to this NgModule
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [], // services to become accessible in all parts of the application
  bootstrap: [AppComponent], // main application view that hosts all the other application views
})
export class AppModule {}
