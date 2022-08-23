import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogCardComponent from './BlogCardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { blogRequest } from '../../../redux/action';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Loader from '../../../shared/commonComponent/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const BlogComponent = () => {
  const { blogReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addFavourite = (blogId) => {
    dispatch(blogRequest(blogId));
  };

  const history = useHistory();
  const editBlog = (blogId) => {
    history.push(`/edit-blog/${blogId}`);
  };

  const [blogs, setBlogs] = useState([]);
  const [blogLimit, setBlogLimit] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let blogItems = blogReducer.blogList.slice(0, blogLimit);
    setBlogs(blogItems);
    setBlogLimit(blogLimit + 3);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMoreData = () => {
    let blogItems = blogReducer.blogList.slice(0, blogLimit);
    setTimeout(() => {
      setBlogs(blogItems);
      setBlogLimit(blogLimit + 3);
      if (blogReducer.blogList.length === blogItems.length) {
        setHasMore(false);
      }
    }, 1500);

    // a fake async api call like which sends
    // 20 more records in 1.5 secs
  };

  return (
    <div className='blog-wrapper'>
      <Container>
        <Row className='text-right mb-3'>
          <Col md='12'>
            <Link to={'/add-blog'} className='btn btn-secondary'>
              Add Blog
            </Link>
            <Link to={'/favorite-blog'} className='btn btn-secondary ml-2'>
              Favorite Blog
            </Link>
          </Col>
        </Row>

        <InfiniteScroll
          dataLength={blogs}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className='text-center'>
              <Loader />
            </div>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Row className='m-0'>
            {blogs.map((item, index) => (
              <Col md='4' key={item.id}>
                <BlogCardComponent
                  blog={item}
                  addFavourite={addFavourite}
                  editBlog={editBlog}
                />
              </Col>
            ))}
            {!blogReducer.blogList.length ? (
              <Col md='12' className='blog-empty'>
                <h2>Blog is empty</h2>
              </Col>
            ) : null}
          </Row>
        </InfiniteScroll>
      </Container>
    </div>
  );
};;
export default BlogComponent;
