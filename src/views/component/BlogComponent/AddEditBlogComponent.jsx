import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleReactValidator from 'simple-react-validator';

const options = [
  { value: 'Travel', label: 'Travel' },
  { value: 'Music', label: 'Music' },
  { value: 'Fitness', label: 'Fitness' },
];

const AddEditBlogComponent = ({ blogItem, listLength, handleSubmit }) => {
  // if (blogItem) {
  //   categoryArray = blogItem.category.map((item) => ({
  //     value: item,
  //     label: item,
  //   }));
  // }
  const defaultForm = {
    id: blogItem ? blogItem.id : listLength + 1,
    title: blogItem ? blogItem.title : '',
    category: blogItem ? blogItem.category : [],
    tags: blogItem ? blogItem.tags : '',
    description: blogItem ? blogItem.description : '',
    date: new Date(),
    isFavourite: blogItem ? blogItem.isFavourite : false,
  };
  // debugger;

  const [formData, setFormData] = useState(defaultForm);
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleCategoryChange = (target) => {
    setFormData({
      ...formData,
      category: [...target],
    });
  };

  const [, forceUpdate] = useState();
  const simpleValidator = useRef(new SimpleReactValidator());

  const handleValidation = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      toast.success('Your Form Submitted', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleSubmit(formData);
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
      toast.error('Please fill required field', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <Form onSubmit={handleValidation}>
        <Row>
          <Col md='12'>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Enter Title'
                name='title'
                value={formData.title}
                onChange={handleChange}
              />
              <div className='text-danger'>
                {simpleValidator.current.message(
                  'title',
                  formData.title,
                  'required'
                )}
              </div>
            </Form.Group>
          </Col>
          <Col md='12'>
            <Form.Group>
              <Select
                options={options}
                placeholder='Select Category'
                isMulti
                name='category'
                defaultValue={formData.category}
                // value={formData.category}
                onChange={handleCategoryChange}
              />
              <div className='text-danger'>
                {simpleValidator.current.message(
                  'category',
                  formData.category,
                  'required'
                )}
              </div>
            </Form.Group>
          </Col>
          <Col md='12'>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Add Tags'
                name='tags'
                value={formData.tags}
                onChange={handleChange}
              />
              <div className='text-danger'>
                {simpleValidator.current.message(
                  'tags',
                  formData.tags,
                  'required'
                )}
              </div>
            </Form.Group>
          </Col>
          <Col md='12'>
            <Form.Group>
              <CKEditor
                editor={ClassicEditor}
                data={formData.description}
                config={{ placeholder: 'Enter Description' }}
                name='description'
                enterMode='CKEDITOR.ENTER_BR'
                shiftEnterMode='CKEDITOR.ENTER_P'
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  setFormData({ ...formData, description: data });
                }}
                onBlur={(event, editor) => {
                  // console.log( 'Blur.', editor );
                }}
                onFocus={(event, editor) => {
                  // console.log( 'Focus.', editor );
                }}
              />
              <div className='text-danger'>
                {simpleValidator.current.message(
                  'description',
                  formData.description,
                  'required'
                )}
              </div>
            </Form.Group>
          </Col>
          <Col md='12' className='text-center'>
            <Button type='submit'>Submit</Button>
          </Col>
        </Row>
      </Form>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
};
export default AddEditBlogComponent;
