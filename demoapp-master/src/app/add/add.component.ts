import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItem } from '../models/listitem';
import { Services } from '../services/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

  @Output() infoEvent = new EventEmitter();
  @Input() infoData: ListItem; 
  
  item: ListItem = {
    _id:undefined,
    updated_at: new Date(),
    user_address: "",
    user_email: "",
    user_fullname: ""
  };
  
  title:string = "Add";

  constructor(private service:Services) {
  }

  ngOnInit(){
    if(this.infoData._id) {
      this.service.onGetItem(this.infoData._id).subscribe(res => {
        this.item = res;
      });
      this.title = "Update"
    }
  }

  onAdd(){
    if (this.item._id === undefined) {
      this.service.onAdd({
        ...this.item,
        updated_at: new Date()
      })
      .subscribe(res => {
        this.infoEvent.emit({
          type: "List"
        });
      });
    } else {
      this.service.onUpdate(this.item)
      .subscribe(res => {
        this.infoEvent.emit({
          type: "List"
        });
      });
    }
  }
  
  onBack(){
    this.infoEvent.emit({
      type: "List"
    });
  }
  
}
