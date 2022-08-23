import React from 'react';
import AddEditBlogComponent from '../../component/BlogComponent/AddEditBlogComponent';
import { Link } from 'react-router-dom';
import { blogAddRequest } from '../../../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddBlog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (formData) => {
    dispatch(blogAddRequest(formData));
    history.push('/');
  };
  const { blogReducer } = useSelector((state) => state);
  const listLength = blogReducer.blogList.length;

  return (
    <div className='blog-wrapper'>
      <div className='form-inner'>
        <h2 className='text-center'>Add Blog</h2>
        <div className='text-right mb-3'>
          <Link to={'/'} className='btn btn-secondary'>
            Blog List
          </Link>
        </div>
        <div>
          <AddEditBlogComponent
            handleSubmit={handleSubmit}
            listLength={listLength}
          />
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
