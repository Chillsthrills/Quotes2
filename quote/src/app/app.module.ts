import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { DetailComponent } from './detail/detail.component';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    EntryFormComponent,
    DetailComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
