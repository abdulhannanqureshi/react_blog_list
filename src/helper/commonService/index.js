import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';

export const GlobalLoader = () => {
  return (
    <div className='loader-wrapper'>
      <Spinner animation='grow' />
    </div>
  );
};

export const TextTruncate = ({ str, limit }) => {
  if (str && str.length >= limit) {
    let limitStr = str.substring(0, limit) + '...';
    return <div dangerouslySetInnerHTML={{ __html: limitStr }} />;
  } else {
    return <div dangerouslySetInnerHTML={{ __html: str }} />;
  }
};

export const dateFormate = (dateTime) => {
  let time = moment(dateTime);
  if (moment().diff(time, 'hours') < 10) {
    let date = moment(dateTime, 'YYYY-MM-DDTHH:mm:ss.SSSSZ');
    var fromNow = date.fromNow();
    return `${fromNow} , at ${time.format('hh:mm A')}`;
  } else {
    let date = moment(dateTime, 'YYYY-MM-DDTHH:mm:ss.SSSSZ');
    return `${date.format('MM-DD-YYYY')} , at ${time.format('hh:mm A')}`;
  }
};
