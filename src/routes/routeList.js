import React from 'react';
const Blog = React.lazy(() => import('../views/pages/Blog'));
const FavoriteBlog = React.lazy(() =>
  import('../views/pages/Blog/FavoriteBlog')
);
const AddBlog = React.lazy(() => import('../views/pages/Blog/AddBlog'));
const EditBlog = React.lazy(() => import('../views/pages/Blog/EditBlog'));

const routeList = [
  {
    path: '/',
    exact: true,
    name: 'blog',
    component: Blog,
  },
  {
    path: '/favorite-blog',
    exact: false,
    name: 'favoriteBlog',
    component: FavoriteBlog,
  },
  {
    path: '/add-blog',
    exact: false,
    name: 'addBlog',
    component: AddBlog,
  },
  {
    path: '/edit-blog/:id',
    exact: false,
    name: 'editBlog',
    component: EditBlog,
  },
  {
    path: '*',
    exact: true,
    name: 'blog',
    component: Blog,
  },
];
export default routeList;
