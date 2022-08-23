import React, { useState } from 'react';
import { TextTruncate } from '../../helper/commonService';

const TextReadMore = ({ blogDescription, limit }) => {
  const [readMoreStatus, setReadMoreStatus] = useState(true);
  const readMore = () => {
    setReadMoreStatus(!readMoreStatus);
  };

  return (
    <div>
      {readMoreStatus
        ? TextTruncate({ str: blogDescription, limit })
        : TextTruncate({ str: blogDescription })}
      {blogDescription.length >= limit ? (
        <div className='text-right'>
          <span className='btn btn-info mt-2' onClick={readMore}>
            {readMoreStatus ? 'Read More' : 'Read Less'}
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default TextReadMore;
