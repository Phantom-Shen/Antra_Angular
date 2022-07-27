import { Component, VERSION } from '@angular/core';
import { mockData } from './mockData';
import { NewsInterface, newActiveInterface } from './interfaces/news';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newsList: NewsInterface[] = mockData;
  activeList: boolean[] = new Array(mockData.length).fill(false);
  color: string = 'purple';

  changeActive(newActive: newActiveInterface) {
    this.color = newActive.newColor;
    const newActiveList: boolean[] = new Array(mockData.length).fill(false);
    newActiveList[newActive.newActiveIndex] = true;
    this.activeList = newActiveList;
  }
}
