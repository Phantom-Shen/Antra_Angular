import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { TypePipe } from '../../pipes/type.pipe';
import { ClickNotificationComponent } from './click-notification/click-notification.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavBarComponent,
    PokemonCardComponent,
    ClickNotificationComponent,
    SideBarComponent,
    TypePipe,
  ],
  exports: [
    NavBarComponent,
    PokemonCardComponent,
    ClickNotificationComponent,
    SideBarComponent,
  ],
})
export class SharedModule {}
