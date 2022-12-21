import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as filterActions from '../../filter/filter.actions';
import { deleteCompleted } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentFilter!: filterActions.filterType;
  filters: filterActions.filterType[] = ['all', 'completed', 'missed']

  pendingTaskCount!: number;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter => this.currentFilter = filter)

    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTaskCount = state.todos.filter(todo => !todo.completed).length;
    })
  }

  selectFilter(filter: filterActions.filterType):void{
    if(filter === this.currentFilter) {return}
    this.store.dispatch(filterActions.setFilter({filter}));
  }

  deleteComplete():void{
    this.store.dispatch(deleteCompleted());
  }
}
