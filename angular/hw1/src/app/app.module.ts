import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewsComponent } from './news/news.component';
import { SetColorComponent } from './set-color/set-color.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NewsComponent,
    SetColorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
