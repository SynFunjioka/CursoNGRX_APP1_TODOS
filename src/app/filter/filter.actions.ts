import { createAction, props } from '@ngrx/store';

export type filterType = 'all'  |  'completed'  |  'missed';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{filter: filterType}>()
)
