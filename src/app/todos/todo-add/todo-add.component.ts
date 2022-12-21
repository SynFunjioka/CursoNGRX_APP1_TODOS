import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput!: FormControl;
  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)

  }

  ngOnInit(): void {
  }

  addTodo():void{
    if(this.txtInput.invalid) {return;}

    this.store.dispatch(todoActions.createTODO({text: this.txtInput.value}));
    this.txtInput.reset();
  }
}
