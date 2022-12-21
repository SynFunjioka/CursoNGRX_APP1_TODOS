import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  completed: boolean = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll():void{
    this.completed = !this.completed;
    this.store.dispatch(toggleAll({toggle: this.completed}))
  }

}
