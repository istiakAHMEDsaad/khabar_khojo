import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MoonLoader } from 'react-spinners';
import { Link } from 'react-router';

const FilterByCategory = () => {
  const [category, setCategory] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [loadingOne, setLoadingOne] = useState([true]);
  const [loadingTwo, setLoadingTwo] = useState([true]);

  useEffect(() => {
    const categoryData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_apiCategory}`);
        setCategory(res?.data?.categories || []);
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
      setLoadingOne(false);
    };
    categoryData();
  }, []);

  useEffect(() => {
    const ingredientData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_apiIngredient}`);
        setIngredient(res?.data?.meals || []);
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
      setLoadingTwo(false);
    };
    ingredientData();
  }, []);

  return (
    <div className='container mx-auto overflow-hidden font-sans'>
      {/* text */}
      <p className='text-center my-10 lg:text-3xl font-semibold '>
        Search you food by{' '}
        <span className='italic text-red-500'>
          <Typewriter
            words={['Category', 'Ingredient']}
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>

      {/* container */}
      <div className='flex items-start justify-center w-full flex-col lg:flex-row'>
        {/* left side */}
        <div className='lg:basis-[45%] w-full flex flex-col items-center'>
          <p className='mb-2 text-2xl italic text-gray-600 dark:text-gray-200 underline'>
            Food Category
          </p>
          {/* container */}
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-2'>
            {loadingOne ? (
              <MoonLoader
                loading={loadingOne}
                size={40}
                color='rgba(6,182,212, 1)'
              />
            ) : (
              category?.map((item, idx) => (
                <Link to={`/category/${item?.strCategory}`}>
                  <div
                  key={idx}
                  className='border border-gray-200 dark:border-gray-800 rounded-sm  md:w-auto flex flex-col items-center justify-center lg:hover:scale-[99%] transition-transform cursor-pointer py-2 shadow-sm'
                >
                  <img
                    src={item?.strCategoryThumb}
                    alt={item?.strCategory}
                    className='w-40 h-20 object-contain'
                  />
                  <p>{item?.strCategory}</p>
                </div>
                </Link>
              ))
            )}
          </div>
        </div>

        <div className='divider lg:divider-horizontal divider-neutral dark:divider-warning'></div>

        {/* right side */}
        <div className='lg:basis-[45%] flex flex-col items-center justify-center'>
          <p className='mb-2 text-2xl italic text-gray-600 dark:text-gray-200 underline'>
            Ingredient
          </p>
          {/* container */}
          <ScrollArea className='w-full h-[33.5rem] rounded-md border p-4'>
            <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2 items-center justify-center mx-auto'>
              {loadingTwo ? (
                <MoonLoader
                  loading={loadingTwo}
                  size={40}
                  color='rgba(6,182,212, 1)'
                />
              ) : (
                ingredient?.map((item, idx) => (
                  <div
                    key={idx + 1}
                    className='border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center mx-auto shadow-xs'
                  >
                    <Link to={`/category/ingredient/${item?.strIngredient}`}>
                      <Tooltip>
                      <TooltipTrigger>
                        <div className='flex flex-col items-center justify-center'>
                          <LazyLoadImage
                            alt={item?.strIngredient}
                            src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                              item?.strIngredient
                            )}.png`}
                            className='w-[3.5rem] h-12 object-cover'
                          />
                          <p>{item?.strIngredient.slice(0, 7) + '..'}</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item?.strIngredient}</p>{' '}
                      </TooltipContent>
                    </Tooltip>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
