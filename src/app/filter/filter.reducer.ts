import { Action, createReducer, on } from '@ngrx/store';
import { filterType, setFilter } from './filter.actions';
// import * as filterActions from './filter.actions';

// export const initialState: filterType = 'all';
export const initialState: filterType = 'all';


const _filtroReducer = createReducer<filterType, Action>(
  initialState,
  on(setFilter, (state, {filter}) => filter)
);


export function filtroReducer(state: any, action: Action) {
  return _filtroReducer(state, action);
}
