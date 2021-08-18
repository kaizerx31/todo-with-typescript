import React from "react";
import { useDispatch } from "react-redux";
import { EFilters, _setFilter } from "../actions";

   const FilterButtons = () => {
   const dispatch = useDispatch();
   return (
        <div className="btns">
            <div className="btn">
                <input
                  id="all"
                  type="radio"
                  value="all"
                  name="filter"
                  defaultChecked
                  onClick={() => dispatch(_setFilter(EFilters.SHOW_ALL))}
                />
                  <label htmlFor="all">All</label>
            </div>

            <div className="btn">
                <input
                  id="complete"
                  type="radio"
                  value="completed"
                  name="filter"
                  onClick={() => dispatch(_setFilter(EFilters.SHOW_COMPLETED))}
                />
                  <label htmlFor="complete">Completed</label>
            </div>

            <div className="btn">
                <input
                  id="incomplete"
                  type="radio"
                  value="incomplete"
                  name="filter"
                  onClick={() => dispatch(_setFilter(EFilters.SHOW_INCOMPLETE))}
                />
                  <label htmlFor="incomplete">Incomplete</label>
            </div>
        </div>
   );
};

export default FilterButtons;
