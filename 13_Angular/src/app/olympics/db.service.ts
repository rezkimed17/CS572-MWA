import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  private document: any[] = [
    { 
      _id: 1, game: { name: 'Chess', schedule: [
          {stadium: 'Marrakech', date: '10/11/2018', time:'17:00'},
          {stadium: 'Stadium T56', date: '01/21/2018', time:'18:00'},
          {stadium: 'Brerlin', date: '03/12/2018', time:'19:00'}
      ]}
    },
    { 
      _id: 2, game: { name: 'Kayak', schedule: [
          {stadium: 'Paris', date: '10/11/2018', time:'17:00'},
          {stadium: 'Stadium T56', date: '01/21/2018', time:'18:00'},
          {stadium: 'Brerlin', date: '03/12/2018', time:'19:00'}
      ]}
    },
    { 
      _id: 3, game: { name: 'Basketball', schedule: [
          {stadium: 'Fairfield', date: '10/11/2018', time:'17:00'},
          {stadium: 'Stadium T56', date: '01/21/2018', time:'18:00'},
          {stadium: 'Brerlin', date: '03/12/2018', time:'19:00'}
      ]}
    },
    { 
      _id: 4, game: { name: 'Badminton', schedule: [
          {stadium: 'Madrid', date: '10/11/2018', time:'17:00'},
          {stadium: 'Stadium T56', date: '01/21/2018', time:'18:00'},
          {stadium: 'Brerlin', date: '03/12/2018', time:'19:00'}
      ]}
    }
  ]
  constructor() {}
  
  getData(){
    return this.document.map((entry) => {
      return { id: entry._id, name: entry.game.name };
    });
  }
  getDataById(id){
    let data = this.document.filter( entry => entry._id == id);
    if(data) return data[0];
    else return null;
  }
}
