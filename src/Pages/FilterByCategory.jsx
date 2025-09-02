import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const FilterByCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categoryData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_apiCategory}`);
        setCategory(res?.data?.meals || []);
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
    categoryData();
  }, []);
    return (
    <div>
        <div>
        <div className='flex flex-col border-e border-gray-100 bg-white dark:bg-neutral-950'>
          <div className='px-4 py-6'>
            {/* list all items */}
            <ul className='mt-6 space-y-1'>

              {/* Filter by Category */}
              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                    <span className='text-sm font-medium'> Filter by Category </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='size-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className='mt-2 space-y-1 px-4'>
                    <li>
                        {category?.map((cateName, idx) => (
                            <button key={idx} className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                                {cateName?.strCategory}
                            </button>
                        ))}
                    </li>
                  </ul>
                </details>
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
      </div>
    </div>
  )
}

export default FilterByCategory