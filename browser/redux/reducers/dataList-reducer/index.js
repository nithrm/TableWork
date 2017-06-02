import { SET_CHECKED } from '../../constants';
import initialState from '../../initialState';

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_CHECKED:
    return {
      ...state,
      dataList: state.dataList.setObjectAt(action.rowIndex, 'checked'),
      updateCount: state.dataList.getObjectAt(action.rowIndex).checked ? state.updateCount + 1 : state.updateCount - 1
    };
  default:
    return state;
  }
};
