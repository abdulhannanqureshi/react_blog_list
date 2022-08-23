import React from 'react';
import AddEditBlogComponent from '../../component/BlogComponent/AddEditBlogComponent';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { blogEditRequest } from '../../../redux/action';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const EditBlog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { blogReducer } = useSelector((state) => state);
  let { id } = useParams();
  let blogItem = blogReducer.blogList.find((e) => e.id === +id);
  if (!blogItem) history.push('/');

  const handleSubmit = (formData) => {
    dispatch(blogEditRequest(formData));
    history.push('/');
  };
  return (
    <div className='blog-wrapper'>
      <div className='form-inner'>
        <h2 className='text-center'>Edit Blog</h2>
        <div className='text-right mb-3'>
          <Link to={'/'} className='btn btn-secondary'>
            Blog List
          </Link>
        </div>
        <div>
          <AddEditBlogComponent
            blogItem={blogItem}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
