import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as todoActions from './todo.actions';



export const initialState:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Bañar al perro'),
  new Todo('Comer verduras'),
  new Todo('Borrar base de datos'),
]

const _todoReducer = createReducer(
  initialState,
  on(todoActions.createTODO, (state, {text}) => [...state, new Todo(text)]), //! no se utiliza el state.push() porque puede MUTAR nuestro estado y eso es lo que no queremos (esto no aplica para variables normales, solmente para arreglos y objetos)
  on(todoActions.toggleCompleted, (state, {id}) => {
    return state.map(todo => {
      if(todo.id === id){
        return{
          ...todo,
          completed: !todo.completed
        }
      }else{
        return todo
      }
    });
  }), //! no se utiliza el state.push() porque puede MUTAR nuestro estado y eso es lo que no queremos (esto no aplica para variables normales, solmente para arreglos y objetos)
  on(todoActions.edit, (state, {id, text}) => {
    return state.map(todo => {
      if(todo.id === id){
        return{
          ...todo,
          text: text
        }
      }else{
        return todo
      }
    });
  }),
  on(todoActions.deleteItem, (state, {id}) => {
    return state.filter(todo => todo.id !== id)
  }),
  on(todoActions.toggleAll, (state, {toggle}) => {
    return state.map(todo => {
      return {
        ...todo,
        completed: toggle
      }
    })
  }),
  on(todoActions.deleteCompleted, state => state.filter(todo => !todo.completed)),
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
