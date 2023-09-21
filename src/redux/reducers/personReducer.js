import { GET_PERSONS, UPDATE_PERSON } from "../actions/personActions.js";

const initiallyState = {
  persons: [],
};

export const personReducer = (state = initiallyState, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return { ...state, persons: action.payload };
    case UPDATE_PERSON:
      // TODO
      return {
        ...state,
        persons: state.persons.map((person) =>
          person.id === action.payload.id ? action.payload : person
        ),
      };
    default:
      return state;
  }
};
