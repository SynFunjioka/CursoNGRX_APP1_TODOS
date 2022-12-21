import { Pipe, PipeTransform } from '@angular/core';
import { filterType } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterType): Todo[] {
    console.log(todos);


    switch(filter){
      case 'completed':
        return todos.filter(todo => todo.completed);

      case 'missed':
        return todos.filter(todo => !todo.completed);

      default:
        return todos;
    }
  }
}
