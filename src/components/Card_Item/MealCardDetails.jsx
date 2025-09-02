import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { toast, Bounce } from 'react-toastify';
import { MoonLoader } from 'react-spinners';
import ReactPlayer from 'react-player';
import { TypographyH3 } from '../Typography/TypographyH3';
import { ScrollText } from 'lucide-react';

const MealCardDetails = () => {
  const { id: mealId } = useParams();

  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_apiUrlID}${mealId}`
        );
        setMealDetails(res?.data?.meals?.[0]);
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
    fetchDetails();
  }, [mealId]);

  const inpageNav = useRef(null);
  const scrollToRead = () => {
    inpageNav.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
  } = mealDetails || {};

  console.log(strYoutube);

  return (
    <section className='container mx-auto'>
      <div
        className={`flex flex-col items-center justify-center ${
          loading === true ? 'min-h-screen]' : ''
        }`}
      >
        {loading && (
          <MoonLoader loading={loading} size={40} color='rgba(12, 10, 9, 1)' />
        )}
      </div>

      {/* container */}
      <div className='mt-10'>
        {/* video and text */}
        <div className='overflow-hidden bg-gray-50 dark:bg-neutral-950 flex lg:flex-row flex-col-reverse'>
          <div className='p-8 md:p-12 lg:px-16 lg:py-24'>
            <div className='md:mx-auto max-w-xl md:text-center ltr:sm:text-left rtl:sm:text-right space-y-2'>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl'>
                {strMeal}
              </h2>

              {strCategory ? (
                <p className='font-bold text-neutral-800 dark:text-gray-200'>
                  Category:{' '}
                  <span className='font-normal italic text-zinc-500 dark:text-zinc-400'>
                    {strCategory}
                  </span>
                </p>
              ) : (
                <p className='font-bold text-neutral-800 dark:text-gray-200'>
                  Category:{' '}
                  <span className='font-normal italic text-zinc-500 dark:text-zinc-400'>
                    Null
                  </span>
                </p>
              )}

              {strArea ? (
                <p className='font-bold text-neutral-800 dark:text-gray-200'>
                  Area:{' '}
                  <span className='font-normal italic text-zinc-500 dark:text-zinc-400'>
                    {strArea}
                  </span>
                </p>
              ) : (
                <p className='font-bold text-neutral-800 dark:text-gray-200'>
                  Area:{' '}
                  <span className='font-normal italic text-zinc-500 dark:text-zinc-400'>
                    ....
                  </span>
                </p>
              )}

              {strTags ? (
                <p className='font-bold text-neutral-800 dark:text-gray-200'>
                  Tags:{' '}
                  <span className='font-normal italic text-zinc-500 dark:text-zinc-400'>
                    {strTags}
                  </span>
                </p>
              ) : (
                <p className='font-bold text-neutral-800 dark:text-gray-200'>
                  Tags:{' '}
                  <span className='font-normal italic text-zinc-500 dark:text-zinc-400'>
                    ....
                  </span>
                </p>
              )}

              <p className='hidden text-gray-500 md:block'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>

              <div className='mt-4 md:mt-8'>
                <button onClick={scrollToRead} className='btn btn-neutral'>
                  Read Full Description
                </button>
              </div>
            </div>
          </div>

          <div className='aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden'>
            <ReactPlayer
              src={strYoutube}
              controls
              width={'100%'}
              height={'85%'}
            />
          </div>
        </div>

        {/* description */}
        <div ref={inpageNav} className='my-10'>
          <TypographyH3
            textVal={'italic'}
            textItem={'center'}
            animateOne={'animate__animated'}
            animateTwo={'animate__flash'}
            animateThree={'animate__infinite'}
            animateFour={'animate__slower'}
          >
            How to cook your favourite food?
          </TypographyH3>

          <h2 className='flex items-center font-bold md:text-2xl gap-2 underline'>
            <ScrollText />
            Ingredient & Measurement:
          </h2>

          <div className='flow-root mt-5'>
            <dl className='-my-3 divide-y divide-gray-200 text-sm'>
              {strIngredient1 ? (
                <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                  <div>
                    <img
                      className='w-10'
                      src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                        strIngredient1
                      )}.png`}
                      alt={strMeal}
                    />
                    <p className='font-medium text-gray-900'>
                      {strIngredient1}
                    </p>
                  </div>

                  <dd className='text-gray-700 sm:col-span-2'>{strMeasure1}</dd>
                </div>
              ) : (
                ''
              )}

              {strIngredient2 ? (
                <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                  <div>
                    <img
                      className='w-10'
                      src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                        strIngredient2
                      )}.png`}
                      alt={strMeal}
                    />
                    <p className='font-medium text-gray-900'>
                      {strIngredient2}
                    </p>
                  </div>

                  <dd className='text-gray-700 sm:col-span-2'>{strMeasure2}</dd>
                </div>
              ) : (
                ''
              )}
              
              {strIngredient3 ? (
                <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                  <div>
                    <img
                      className='w-10'
                      src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                        strIngredient3
                      )}.png`}
                      alt={strMeal}
                    />
                    <p className='font-medium text-gray-900'>
                      {strIngredient3}
                    </p>
                  </div>

                  <dd className='text-gray-700 sm:col-span-2'>{strMeasure3}</dd>
                </div>
              ) : (
                ''
              )}
                

            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealCardDetails;
