import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';

const BrowsePage = () => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const mealData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_apiUrl}`);
        setMeal(res?.data?.meals || []);
      } catch (err) {
        toast.error(err?.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    };
    mealData();
  }, []);

  return (
    <section>
      {/* contianer */}
      <div>
        {/* sidebar */}
        <div className='flex flex-col border-e border-gray-100 bg-white dark:bg-neutral-950'>
          <div className='px-4 py-6'>
            {/* list all items */}
            <ul className='mt-6 space-y-1'>
              {/* list 1 search */}
              <li>
                <label htmlFor='Search'>
                  <span className='text-sm font-medium text-gray-700'>
                    {' '}
                    Search{' '}
                  </span>

                  <div className='relative'>
                    <input
                      type='text'
                      id='Search'
                      className='mt-0.5 w-full rounded border border-gray-300 pe-10 shadow-sm sm:text-sm h-8 pl-2'
                    />

                    <span className='absolute inset-y-0 right-2 grid w-8 place-content-center'>
                      <button
                        type='button'
                        aria-label='Submit'
                        className='rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='size-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </label>
              </li>

              <li>
                <a
                  href='#'
                  className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                >
                  Billing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* card section */}
        
      </div>
    </section>
  );
};

export default BrowsePage;
