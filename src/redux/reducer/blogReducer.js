import { handleActions } from 'redux-actions';
import { blogActionTypes } from '../action';
import { blogInitialStates } from '../state';

const initialState = {
  blogList: blogInitialStates,
  favouriteBlog: [],
};

export const blogReducer = handleActions(
  {
    [blogActionTypes.BLOG_FAVOURITE_SUCCESS]: (state, { payload }) =>
      // console.log('List Payload', payload),
      // console.log('List State', state),
      ({
        ...state,
        blogList: [...payload.blogListData],
        favouriteBlog: [...state.favouriteBlog, payload.favoriteItem],
      }),
    [blogActionTypes.BLOG_REMOVE_SUCCESS]: (state, { payload }) =>
      // console.log('REMOVE Payload', payload),
      // console.log('REMOVE State', state),
      ({
        ...state,
        favouriteBlog: [...payload],
      }),
    [blogActionTypes.BLOG_ADD_SUCCESS]: (state, { payload }) =>
      // console.log('REMOVE Payload', payload),
      // console.log('REMOVE State', state),
      ({
        ...state,
        blogList: [...state.blogList, payload],
      }),
    [blogActionTypes.BLOG_EDIT_SUCCESS]: (state, { payload }) =>
      // console.log('REMOVE Payload', payload),
      // console.log('REMOVE State', state),
      ({
        ...state,
        blogList: [...payload],
      }),
  },
  initialState
);
