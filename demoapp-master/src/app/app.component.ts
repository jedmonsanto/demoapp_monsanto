import { Component } from '@angular/core';
import { ListItem } from './models/listitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'demoapp';
  type = 'List';
  info:ListItem;

  setType (item) {
    if (item.type === 'New') {
      this.type = "Add";
      this.info = item;
    }
    else
      this.type = 'List';
  }

}
