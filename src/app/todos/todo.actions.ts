import { createAction, props } from "@ngrx/store";

export const createTODO = createAction(
  '[TODO] Create',
  props<{text: string}>()
  );

export const toggleCompleted = createAction(
  '[TODO] Toggle complete',
  props<{id: number}>()
  );

export const edit = createAction(
  '[TODO] Edit',
  props<{id: number, text: string}>()
  );

export const deleteItem = createAction(
  '[TODO] Delete',
  props<{id: number}>()
  );

export const toggleAll = createAction(
    '[TODO] Toggle complete - ALL',
    props<{toggle: boolean}>()
    );

export const deleteCompleted = createAction('[TODO] Delete completed');
