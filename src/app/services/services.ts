import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListItem } from '../models/listitem';

@Injectable({
    providedIn: 'root'
})

export class Services {
    items: Array<ListItem> = [];

    constructor(private httpClient: HttpClient){}
    
    onGetItems(){
      return this.httpClient.get<Array<ListItem>>('http://localhost:3001/users')
    }

    onGetItem(id:any){
      return this.httpClient.get<ListItem>(`http://localhost:3001/users/${id}`);
    }

    onAdd(item: ListItem) {
      return this.httpClient.post<ListItem>('http://localhost:3001/users', item);
    }

    onUpdate (item: ListItem) {
      return this.httpClient.put(`http://localhost:3001/users/${item._id}`, item);
    }

    onDelete (item: ListItem) {      
      return this.httpClient.delete(`http://localhost:3001/users/${item._id}`);
    }
}
