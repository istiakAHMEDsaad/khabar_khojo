import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Button } from '@/components/ui/button';
import { MoonLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const IngredientPage = () => {
  const { id: ingredientStr } = useParams();
  const [ingredientItems, setIngredientsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ingredientData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_apiSubIngredient}${ingredientStr}`
        );
        setIngredientsItems(res?.data?.meals);
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
    ingredientData();
  }, [ingredientStr]);
  return (
    <div className='container mx-auto'>
      <Link to={'/category'}>
        <Button className={'mt-2'}>Back</Button>
      </Link>
      <p className='md:text-2xl text-xl font-semibold dark:text-gray-300 text-gray-700 mt-3 mb-5'>
        Selected Ingredient:{' '}
        <span className='italic text-red-500 animate__animated animate__flash animate__infinite animate__slower'>
          {ingredientStr}
        </span>
      </p>

      {/* card section */}
      <div className='flex flex-col items-center justify-center'>
        {/* container */}
        <div className='grid lg:grid-cols-5 grid-cols-2 lg:gap-3 md:gap-2 gap-1 mx-auto'>
          {loading ? (
            <MoonLoader
              loading={loading}
              size={40}
              color='rgba(6,182,212, 1)'
            />
          ) : (
            ingredientItems?.map((item) => (
              <Link to={`/category/ingredient/details/${item?.idMeal}`}>
                <div
                  key={item?.idMeal}
                  className='border border-gray-300 w-full flex flex-col items-center jutify-center lg:pt-5 lg:pb-3 md:py-3 py-3 rounded-sm shadow-sm hover:scale-[99%] transition-transform cursor-pointer'
                >
                  <LazyLoadImage
                    className='md:w-48 w-20 object-cover rounded-md'
                    src={item?.strMealThumb}
                    alt={item?.strMeal}
                    effect='blur'
                  />
                  <Tooltip>
                    <TooltipTrigger>
                      <p className='text-center'>
                        {item?.strMeal.slice(0, 30) + '...'}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item?.strMeal}</p>{' '}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientPage;
