import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const FilterByCategory = () => {
  const [category, setCategory] = useState([]);
  const [ingredient, setIngredient] = useState([]);

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
    };
    categoryData();
  }, []);

  console.log(category);

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
    };
    ingredientData();
  }, []);

  console.log(ingredient);

  return (
    <div className='container mx-auto overflow-hidden font-sans'>
      {/* container */}

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

      <div className='flex items-start justify-center w-full flex-col lg:flex-row'>
        {/* left side */}
        <div className='lg:basis-[45%] w-full flex flex-col items-center'>
          {/* container */}
          <div className='grid lg:grid-cols-4 md:grid-cols-3 md:gap-4'>
            {category?.map((item, idx) => (
              <div
                key={idx}
                className='border border-gray-200 rounded-sm w-[19rem] md:w-auto flex flex-col items-center justify-center lg:hover:scale-[99%] transition-transform cursor-pointer'
              >
                <img
                  src={item?.strCategoryThumb}
                  alt={item?.strCategory}
                  className='w-40 h-20 object-contain'
                />
                <p>{item?.strCategory}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='divider lg:divider-horizontal divider-neutral dark:divider-warning'></div>

        {/* right side */}
        <div className='lg:basis-[45%] flex flex-col items-center justify-center'>
          {/* container */}
          <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7'>
            {ingredient?.map((item, idx) => (
              <div key={idx + 1} className='border border-red-600'>
                {/* <img
                  src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                    item?.strIngredient
                  )}.png`}
                  alt={item?.strIngredient}
                  className='w-16 h-16'
                /> */}
                <Tooltip>
                  <TooltipTrigger>
                    {item?.strIngredient.slice(0, 7) + '..'}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item?.strIngredient}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
