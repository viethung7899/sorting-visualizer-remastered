import { randomArray } from '../utils/utils';
import { ACTION } from '../utils/actions';
import { STATUS, MAX_VALUE } from '../utils/constants';

const reducer = (state, action) => {
  const { payload } = action;
  const arrayCopy = [...state.array];
  switch (action.type) {
    case ACTION.SET_ARRAY: {
      return {
        ...state,
        array: randomArray(action.size, MAX_VALUE),
      };
    }

    case ACTION.CHANGE_SPEED:
      return {
        ...state,
        speed: action.speed,
      };

    case ACTION.SET_ALGORITHM:
      return {
        ...state,
        algorithm: action.algorithm,
      };

    case ACTION.MARK:
      const { status, indices } = payload;
      indices.forEach((index) => (arrayCopy[index].status = status));
      return {
        ...state,
        array: arrayCopy,
      };

    case ACTION.UNMARK:
      action.indices.forEach(
        (index) => (arrayCopy[index].status = STATUS.UNSORTED)
      );
      return {
        ...state,
        array: arrayCopy,
      };

    case ACTION.SWAP:
      const { i1, i2 } = payload;
      arrayCopy[i1] = { ...state.array[i2] };
      arrayCopy[i2] = { ...state.array[i1] };
      return {
        ...state,
        array: arrayCopy,
      };

    default:
      return state;
  }
};

export default reducer;
