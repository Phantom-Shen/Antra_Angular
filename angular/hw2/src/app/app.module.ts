import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { DisplayerComponent } from './displayer/displayer.component';

import { ApiService } from './services/api.service';

import { ShortPipe } from './pipes/short.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MenuItemComponent,
    DisplayerComponent,
    ShortPipe,
  ],
  bootstrap: [AppComponent],
  providers: [ApiService],
})
export class AppModule {}
