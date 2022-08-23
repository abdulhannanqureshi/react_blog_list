import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogCardComponent from './BlogCardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { blogRequest } from '../../../redux/action';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const FavouriteBlogComponent = () => {
  const { blogReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addFavourite = (blogId) => {
    dispatch(blogRequest(blogId));
  };
  console.log(blogReducer, 'blogReducerblogReducerblogReducer');

  const history = useHistory();
  const editBlog = (blogId) => {
    history.push(`/edit-blog/${blogId}`);
  };
  return (
    <div className='blog-wrapper'>
      <Container>
        <Row className='text-right mb-3'>
          <Col md='12'>
            <Link to={'/'} className='btn btn-secondary'>
              Blog List
            </Link>
          </Col>
        </Row>
        <Row>
          {blogReducer &&
          blogReducer.favouriteBlog &&
          blogReducer.favouriteBlog.length ? (
            blogReducer.favouriteBlog.map((item) => (
              <Col md='4' key={item.id}>
                <BlogCardComponent
                  blog={item}
                  addFavourite={addFavourite}
                  editBlog={editBlog}
                />
              </Col>
            ))
          ) : (
            <Col md='12' className='blog-empty'>
              <h2>Favorite Blog is empty</h2>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};
export default FavouriteBlogComponent;
