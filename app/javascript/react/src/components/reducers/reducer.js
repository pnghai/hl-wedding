export default function Reducer(state, { type, value }) {
  switch (type){
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: value,
      }
    default: return state;
  }
}