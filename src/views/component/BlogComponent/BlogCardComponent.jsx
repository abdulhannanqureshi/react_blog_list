import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { dateFormate } from '../../../helper/commonService';
import IconHeart from '../../../assest/img/icon_heart.png';
import IconHeartFill from '../../../assest/img/icon_heart_fill.png';
import TextReadMore from '../../../shared/commonComponent/TextReadMore';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const BlogCardComponent = ({ blog, addFavourite, editBlog }) => {
  return (
    <Card key={blog.id} className='mb-4'>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='cursor-pointer' onClick={() => addFavourite(blog.id)}>
            {blog.isFavourite ? (
              <div>
                <OverlayTrigger
                  placement='top'
                  transition={false}
                  overlay={<Tooltip>Remove Fevorite Blog</Tooltip>}
                >
                  {({ ref, ...triggerHandler }) => (
                    <div {...triggerHandler}>
                      <img ref={ref} src={IconHeartFill} alt='Heart' />
                    </div>
                  )}
                </OverlayTrigger>
              </div>
            ) : (
              <div>
                <OverlayTrigger
                  placement='top'
                  transition={false}
                  overlay={<Tooltip>Add Fevorite Blog</Tooltip>}
                >
                  {({ ref, ...triggerHandler }) => (
                    <div {...triggerHandler}>
                      <img ref={ref} src={IconHeart} alt='Heart' />
                    </div>
                  )}
                </OverlayTrigger>
              </div>
            )}
          </div>
          <Button
            className='btn-success cursor-pointer'
            onClick={() => editBlog(blog.id)}
          >
            Edit
          </Button>
        </div>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          <b>Category:</b>
          {blog.category.map((category, index) => (
            <Badge pill variant='primary' className='mr-1' key={index}>
              {category.value}
            </Badge>
          ))}
        </Card.Subtitle>
        <Card.Subtitle className='mb-2 text-muted'>
          <b className='mr-1'>Tags:</b>
          {blog.tags}
        </Card.Subtitle>
        <TextReadMore blogDescription={blog.description} limit={60} />
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>{dateFormate(blog.date)}</small>
      </Card.Footer>
    </Card>
  );
};
export default BlogCardComponent;
