import { EActionTypes, EFilters, IActionObject } from "../actions";

 const _filter = (state :string=EFilters.SHOW_ALL,action : IActionObject) => {
        switch(action.type) {
            case EActionTypes.SET_FILTER:
                return action.filter;
            default:
                return state;
         }
}
export default _filter;