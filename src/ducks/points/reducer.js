import pointsTypes from './types';

const initialState = {
  points: [],
  activePoint: null,
  dateRange: [],
  singleDate: null,
  useDurationFilter: false,
  duration: null,
};

export default function reducer(state = initialState, action) {
  const { type, data, points } = action;
  switch (type) {
    case pointsTypes.POINTS:
      return {
        ...state,
        points,
      };
    case pointsTypes.ACTIVE_POINT:
      return {
        ...state,
        activePoint: data,
      };
    case pointsTypes.SET_DATE_RANGE:
      return {
        ...state,
        dateRange: data,
        singleDate: initialState.singleDate,
      };
    case pointsTypes.SET_SINGLE_DATE:
      return {
        ...state,
        singleDate: data,
        dateRange: initialState.dateRange,
      };
    case pointsTypes.SET_FILTERS:
      return {
        ...state,
        ...data,
      };
    case pointsTypes.CLEAR_FILTERS:
      return {
        ...state,
        useDurationFilter: initialState.useDurationFilter,
        duration: initialState.duration,
      };
    default:
      return state;
  }
}
