import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import MealCard from '../components/Card_Item/MealCard';
import { MoonLoader } from 'react-spinners';
import { useSearchParams } from 'react-router';
import ReactPaginate from 'react-paginate';
import { TypographyH3 } from '../components/Typography/TypographyH3';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BrowsePage = () => {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  // page managment:
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get('page') || 1); //default page 1
  const [currentPage, setCurrentPage] = useState(initialPage - 1); //make sure index 0

  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 9;

  useEffect(() => {
    const mealData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_apiUrl}${searchTerm}`
        );
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
  }, [searchTerm]);

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
      <div className='flex flex-col items-center justify-center mt-5 gap-y-6'>
        {/* sidebar */}
        <div className='grid w-full max-w-sm items-center gap-3'>
          <Label htmlFor='search'>Search</Label>
          <Input
            type='text'
            id='search'
            placeholder='Search Food Like Arrabiata...'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>

        {/* card section */}
        <div className=' flex flex-col items-center justify-center mx-auto'>
          {loading ? (
            <div className='flex items-center justify-center mx-auto'>
              <MoonLoader
                loading={loading}
                size={40}
                color='rgba(6,182,212, 1)'
                className='flex items-center justify-center'
              />
            </div>
          ) : (
            <>
              {' '}
              {/* card container grid version */}
              <div className='flex flex-col items-center justify-center'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3'>
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
                  pageClassName='px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors'
                  activeClassName='bg-black text-white dark:bg-white dark:text-black pointer-events-none'
                  previousClassName='px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800'
                  nextClassName='px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800'
                  disabledClassName='opacity-50 cursor-not-allowed'
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowsePage;
