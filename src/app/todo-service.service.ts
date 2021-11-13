import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {
  public todolist = [
    {"sno":1,"Task":"Play Games"},
    {"sno":2,"Task":"Sketching  "},
    {"sno":3,"Task":"Edit Video"},
    {"sno":4,"Task":"Sleep"},
  ]
  getlist(){
    return this.todolist
  }
  constructor() { }
}
