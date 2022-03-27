import {
  REQUEST, SUCCESS, FAILURE,
  CREATE, EDIT, DELETE,
  TOGGLE_ADDING, TOGGLE_EDITING, TOGGLE_DELETING, DIRECT_SELECT,
  ERROR_RESET, THING_RESET
} from '../actions/types.js';


const initialState = {
  cells: [],
  selected: null,
  loading: false,
  adding: false,
  editing: false,
  deleting: false,
}

const cellReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST:
      return { ...state, loading: true }
    case FAILURE:
      return { ...state, loading: false, error: action.payload }
    case SUCCESS:
      return { ...state, loading: false, cells: action.payload }
    case CREATE:
      return {
        ...state,
        // Add the new thing to the end
        cells: [
          ...state.cells,
           action.payload
         ],
        selected: action.payload,
        adding: false,
        loading: false
      }
    case EDIT:
      return {
        ...state,
        // Filter out the thing with the payload's id and add the edited one to the end
        cells: [
          ...state.cells.filter(thing => thing._id !== action.payload._id),
          action.payload
        ],
        selected: action.payload,
        editing: false,
        loading: false
      }
    case DELETE:
      return {
        ...state,
        // Filter out the thing with the payload's id
        cells: [
          ...state.cells.filter(thing => thing._id !== action.payload)
        ],
        selected: null,
        deleting: false,
        loading: false
      }
    case TOGGLE_ADDING:   return { ...state, adding: !state.adding }
    case TOGGLE_EDITING:  return { ...state, editing: !state.editing }
    case TOGGLE_DELETING: return { ...state, deleting: !state.deleting }
    case DIRECT_SELECT:   return { ...state, selected: action.payload }
    case ERROR_RESET:     return { ...state, error: null }
    case THING_RESET:     return initialState;
    default:
      return state;
  }
};

export default cellReducer;
