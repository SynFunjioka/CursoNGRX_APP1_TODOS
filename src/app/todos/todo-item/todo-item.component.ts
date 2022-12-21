import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputToEdit') txtInputRef!: ElementRef

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.todo.completed = true;
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(todoActions.toggleCompleted({id: this.todo.id}));
    })
  }

  edit():void{
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => { //!Mala practica
      this.txtInputRef.nativeElement.select();
    }, 1);
  }

  update():void{
    this.editing = false;

    if(this.txtInput.invalid){return;}
    if(this.txtInput.value === this.todo.text){return;}

    this.store.dispatch(todoActions.edit({id: this.todo.id, text: this.txtInput.value}))
  }

  delete():void{
    this.store.dispatch(todoActions.deleteItem({id: this.todo.id}))
  }

}
