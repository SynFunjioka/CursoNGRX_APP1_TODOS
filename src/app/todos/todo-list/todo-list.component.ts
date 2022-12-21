import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterType } from '../../filter/filter.actions';
import { AppState } from '../../app.reducer';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter!: filterType
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( ({todos, filter}) => {
      this.todos = todos;
      this.currentFilter = filter;
    })
  }

}
