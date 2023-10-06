import PropTypes from 'prop-types';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const { status , statusText } = error;
  console.log(status)

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[80%] lg:w-[50%] text-center text-base  lg:text-xl space-y-5'>
            <div className='text-center'>
                <img className='w-[200px] mx-auto' src="https://tse1.mm.bing.net/th?id=OIP.Yo6-sQUC7-gajuk7iaHhIAHaHW&pid=Api&P=0&h=220" alt="" />
            </div>
            <p className='text-red-500 font-bold 2xl:text-5xl lg:text-3xl font bold text-xl'>{status} {statusText}</p>
            <p>
                {error.error.message}
            </p>
            <p>
                {error.error.stack}
            </p>
        </div>
    </div>
  );
};


ErrorPage.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number.isRequired,
    statusText: PropTypes.string.isRequired,
  }),
};

export default ErrorPage;
