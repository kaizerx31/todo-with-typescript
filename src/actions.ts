import { v4 as uuid } from 'uuid';

export enum EActionTypes  {
  ADD_TODO = "ADD_TODO" ,
  TOGGLE_TODO = "TOGGLE_TODO" ,
  SET_FILTER  = "SET_FILTER"
}

export const _addTodo = (title :string) :IActionObject =>  ({
  type: EActionTypes.ADD_TODO,
  id: uuid(),
  title:title
})

export const _toggleTodo = (id : string) :IActionObject => ({
    type: EActionTypes.TOGGLE_TODO,
    id:id
  })

export const _setFilter = (filter :string) :IActionObject => ({
  type: EActionTypes.SET_FILTER,
  filter:filter
})



export enum EFilters  {
  SHOW_ALL        = "SHOW_ALL",
  SHOW_COMPLETED  = "SHOW_COMPLETED",
  SHOW_INCOMPLETE = "SHOW_INCOMPLETE"
}

// export interface IAddToDoAction {
//     type  : string;
//     id    : string;
//     title : string;
// }

// export interface IToggleToDoAction {
//     type  : string;
//     id    : string;
// }

// export interface ISetFilterAction {
//     type  : string;
//     filter: string;
// }

export interface IActionObject {
    type   :string;
    id?    : string;
    title? : string;
    filter?: string;

}


