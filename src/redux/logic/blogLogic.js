import { createLogic } from 'redux-logic';
import {
  blogActionTypes,
  blogSuccess,
  blogRemoveSuccess,
  blogAddSuccess,
  blogEditSuccess,
} from '../action';

const blogFavourite = createLogic({
  type: blogActionTypes.BLOG_FAVOURITE_REQUEST,
  async process({ action, getState }, dispatch, done) {
    try {
      let { blogReducer } = getState();
      let blogId = action.payload;
      let index = blogReducer.blogList.findIndex((e) => e.id === blogId);
      blogReducer.blogList[index].isFavourite =
        !blogReducer.blogList[index].isFavourite;
      let blogListData = blogReducer.blogList;

      let favoriteItem = {};
      if (blogReducer.blogList[index].isFavourite) {
        favoriteItem = { ...blogReducer.blogList[index] };
        dispatch(
          blogSuccess({
            blogListData: blogListData,
            favoriteItem: favoriteItem,
          })
        );
      } else {
        let favoriteIndex = blogReducer.favouriteBlog.findIndex(
          (e) => e.id === blogId
        );
        blogReducer.favouriteBlog.splice(favoriteIndex, 1);
        let removeFavoriteData = blogReducer.favouriteBlog;
        dispatch(blogRemoveSuccess(removeFavoriteData));
        done();
      }
    } catch (error) {
      console.log('================Catch Error====================');
      console.log(error.message);
      console.log('================Catch Error====================');
    }
  },
});

const blogAddLogic = createLogic({
  type: blogActionTypes.BLOG_ADD_REQUEST,
  async process({ action }, dispatch, done) {
    try {
      let blogAddItem = action.payload;
      let blogListItem = {
        ...blogAddItem,
      };
      dispatch(blogAddSuccess(blogListItem));
      done();
    } catch (error) {
      console.log('================Catch Error====================');
      console.log(error.message);
      console.log('================Catch Error====================');
    }
  },
});

const blogEditLogic = createLogic({
  type: blogActionTypes.BLOG_EDIT_REQUEST,
  async process({ action, getState }, dispatch, done) {
    try {
      const { blogReducer } = getState();
      const blogId = action.payload.id;
      const blogEditData = action.payload;
      const blogIndex = blogReducer.blogList.findIndex((e) => e.id === blogId);
      blogReducer.blogList.splice(blogIndex, 1, blogEditData);
      const blogEdit = blogReducer.blogList;
      dispatch(blogEditSuccess(blogEdit));

      if (blogReducer.blogList[blogIndex].isFavourite) {
        const blogFavIndex = blogReducer.favouriteBlog.findIndex(
          (e) => e.id === blogId
        );
        blogReducer.favouriteBlog.splice(blogFavIndex, 1, blogEditData);
        const blogEditFavourite = blogReducer.favouriteBlog;
        dispatch(blogSuccess({ favoriteItem: blogEditFavourite }));
      }
      done();
    } catch (error) {
      console.log('================Catch Error====================');
      console.log(error.message);
      console.log('================Catch Error====================');
    }
  },
});
export const blogLogics = [blogFavourite, blogAddLogic, blogEditLogic];
