import { ActionReducerMap } from "@ngrx/store";

import { filterType } from "./filter/filter.actions";
import { Todo } from "./todos/models/todo.model";

//Reducers
import { filtroReducer } from "./filter/filter.reducer";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState{
  todos: Todo[],
  filter: filterType

}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filtroReducer
}
