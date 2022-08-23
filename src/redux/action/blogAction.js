import { createAction } from 'redux-actions';

export const blogActionTypes = {
  BLOG_FAVOURITE_REQUEST: 'Blog Favourite Requested!',
  BLOG_FAVOURITE_SUCCESS: 'Blog Favourite Success!',
  BLOG_FAVOURITE_FAILED: 'Blog Favourite Failed!',
  BLOG_REMOVE_REQUEST: 'Blog Remove Requested!',
  BLOG_REMOVE_SUCCESS: 'Blog Remove Success!',
  BLOG_REMOVE_FAILED: 'Blog Remove Failed!',
  BLOG_ADD_REQUEST: 'Blog Add Requested!',
  BLOG_ADD_SUCCESS: 'Blog Add Success!',
  BLOG_EDIT_REQUEST: 'Blog Edit Requested!',
  BLOG_EDIT_SUCCESS: 'Blog Edit Success!',
};

export const blogRequest = createAction(blogActionTypes.BLOG_FAVOURITE_REQUEST);
export const blogSuccess = createAction(blogActionTypes.BLOG_FAVOURITE_SUCCESS);
export const blogFailed = createAction(blogActionTypes.BLOG_FAVOURITE_FAILED);
export const blogRemoveSuccess = createAction(
  blogActionTypes.BLOG_REMOVE_SUCCESS
);
export const blogAddRequest = createAction(blogActionTypes.BLOG_ADD_REQUEST);
export const blogAddSuccess = createAction(blogActionTypes.BLOG_ADD_SUCCESS);

export const blogEditRequest = createAction(blogActionTypes.BLOG_EDIT_REQUEST);
export const blogEditSuccess = createAction(blogActionTypes.BLOG_EDIT_SUCCESS);
