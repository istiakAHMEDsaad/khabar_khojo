import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import MealCard from '../components/Card_Item/MealCard';
import { MoonLoader } from 'react-spinners';
import { useSearchParams } from 'react-router';
import ReactPaginate from 'react-paginate';
import { TypographyH3 } from '../components/Typography/TypographyH3';

const BrowsePage = () => {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  // page managment:
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get('page') || 1); //default page 1
  const [currentPage, setCurrentPage] = useState(initialPage - 1); //make sure index 0

  const itemsPerPage = 9;

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
      setLoading(false);
    };
    mealData();
  }, []);

  // pagination logic
  const offset = currentPage * itemsPerPage;
  const currentItems = meal?.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(meal?.length / itemsPerPage);

  // control react paginate button
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    setSearchParams({ page: (selected + 1).toString() });
  };

  return (
    <section className='my-10 mx-auto container'>
      <TypographyH3
        textVal={'italic'}
        textItem={'center'}
        animateOne={'animate__animated'}
        animateTwo={'animate__flash'}
        animateThree={'animate__infinite'}
        animateFour={'animate__slower'}
      >
        Search Your Favourite Food
      </TypographyH3>

      {/* contianer */}
      <div className='flex md:flex-row flex-col items-start mt-5 gap-x-6'>
        {/* sidebar */}
        <div className='md:basis-[25%] md:flex border md:flex-col border-e border-gray-100 bg-white dark:bg-neutral-950'>
          <div className='px-4 py-4'>
            {/* list all items */}
            <ul className='mt-6 space-y-1'>
              {/* list 1 search */}
              <li>
                <label htmlFor='Search'>
                  <span className='text-sm font-medium text-gray-700 dark:text-white'>
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
        <div className='md:basis-[70%] flex flex-col items-center justify-center'>
          <div
            className={`flex flex-col items-center justify-center ${
              loading === true ? 'min-h-screen]' : ''
            }`}
          >
            {loading && (
              <MoonLoader
                loading={loading}
                size={40}
                color='rgba(12, 10, 9, 1)'
              />
            )}
          </div>

          {/* card container grid version */}
          <div className='flex flex-col items-center justify-center'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
              {currentItems?.map((item) => (
              <MealCard key={item?.idMeal} item={item} />
            ))}
            </div>
          </div>

          {/* pagination here */}
          <div className='mt-6'>
            <ReactPaginate
              breakLabel='...'
              nextLabel='Next >'
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              forcePage={currentPage} // <- keeps correct page active from URL
              previousLabel='< Prev'
              renderOnZeroPageCount={null}
              containerClassName='flex items-center space-x-2'
              pageClassName='px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800'
              activeClassName='bg-black text-white dark:bg-white dark:text-black'
              previousClassName='px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800'
              nextClassName='px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800'
              disabledClassName='opacity-50 cursor-not-allowed'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowsePage;
