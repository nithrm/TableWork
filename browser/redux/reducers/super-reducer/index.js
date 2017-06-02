import { Map, List } from 'immutable';

const Tivo = [];

// This design pattern helps avoid the nesting problem that combineReducers creates.
export default (state, reducers, action) => {
  // Edge Case - App just initialized;
  if (Tivo.length === 0) {
    // State at this moment is an immutable Map.
    Tivo.push(state);
  }

  // For all of our reducers...
  reducers.forEach(reducer => {
    // Take our current recordings
    Tivo.push(
      // That is the reduction of the last state
      // With this action
      reducer(Tivo[Tivo.length - 1], action)
    )
  });

  // Return the new last state.
  return Tivo[Tivo.length - 1];
};
