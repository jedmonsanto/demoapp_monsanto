import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../models/listitem';
import { Services } from '../services/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  
  @Output() infoEvent = new EventEmitter();
  
  items: Array<ListItem> = [];
  
  constructor(private service:Services) { 
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.service.onGetItems().subscribe(res => {
      this.items = res;
    });
  }

  deleteInfo (item) {
    if(confirm(`Are you sure you want to Delete ${item.user_email}?`)){
      this.service.onDelete(item).subscribe(res => {
        this.getItems();
      });
    }
  }

  newInfo () {
    this.infoEvent.emit({
      type: "New"
    });
  }

  updateInfo (item) {
    this.infoEvent.emit({
      type: "New",
      ...item
    });
  }
}