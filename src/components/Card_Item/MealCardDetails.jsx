import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router';
import { toast, Bounce } from 'react-toastify';
import { MoonLoader } from 'react-spinners';
import ReactPlayer from 'react-player';
import { TypographyH3 } from '../Typography/TypographyH3';
import { ScrollText, CookingPot } from 'lucide-react';
import { Button } from '../ui/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

  return (
    <section className='container mx-auto'>
      <Link to={-1} className=''>
        <Button className={'mt-4'}>Back</Button>
      </Link>

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
                <button
                  onClick={scrollToRead}
                  className='btn btn-neutral dark:btn-soft'
                >
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

          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead className='dark:text-gray-300'>
                <tr>
                  <th>Image</th>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>

              <tbody>
                {/* row 1 */}
                {strIngredient1 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            {/* <img
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient1
                              )}.png`}
                              alt={strIngredient1}
                            /> */}
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient1
                              )}.png`}
                              alt={strIngredient1}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient1}</td>

                    <td>{strMeasure1}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 2 */}
                {strIngredient2 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient2
                              )}.png`}
                              alt={strIngredient2}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient2}</td>

                    <td>{strMeasure2}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row3 */}
                {strIngredient3 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient3
                              )}.png`}
                              alt={strIngredient3}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient3}</td>

                    <td>{strMeasure3}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 4 */}
                {strIngredient4 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient4
                              )}.png`}
                              alt={strIngredient4}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient4}</td>

                    <td>{strMeasure4}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 5 */}
                {strIngredient5 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient5
                              )}.png`}
                              alt={strIngredient5}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient5}</td>

                    <td>{strMeasure5}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 6 */}
                {strIngredient6 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient6
                              )}.png`}
                              alt={strIngredient6}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient6}</td>

                    <td>{strMeasure6}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 7 */}
                {strIngredient7 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient7
                              )}.png`}
                              alt={strIngredient7}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient7}</td>

                    <td>{strMeasure7}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 8 */}
                {strIngredient8 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient8
                              )}.png`}
                              alt={strIngredient8}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient8}</td>

                    <td>{strMeasure8}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 9 */}
                {strIngredient9 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient9
                              )}.png`}
                              alt={strIngredient9}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient9}</td>

                    <td>{strMeasure9}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 10 */}
                {strIngredient10 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient10
                              )}.png`}
                              alt={strIngredient10}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient10}</td>

                    <td>{strMeasure10}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 11 */}
                {strIngredient11 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient11
                              )}.png`}
                              alt={strIngredient11}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient11}</td>

                    <td>{strMeasure11}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 12 */}
                {strIngredient12 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient12
                              )}.png`}
                              alt={strIngredient12}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient12}</td>

                    <td>{strMeasure12}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 13 */}
                {strIngredient13 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient13
                              )}.png`}
                              alt={strIngredient13}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient13}</td>

                    <td>{strMeasure13}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 14 */}
                {strIngredient14 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient14
                              )}.png`}
                              alt={strIngredient14}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient14}</td>

                    <td>{strMeasure14}</td>
                  </tr>
                ) : (
                  ''
                )}

                {/* row 15 */}
                {strIngredient15 ? (
                  <tr>
                    {/* image */}
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle h-12 w-12'>
                            <LazyLoadImage
                              src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                strIngredient15
                              )}.png`}
                              alt={strIngredient15}
                              className='w-full h-full'
                              effect='blur'
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{strIngredient15}</td>

                    <td>{strMeasure15}</td>
                  </tr>
                ) : (
                  ''
                )}
              </tbody>
            </table>
          </div>

          <h2 className='mt-10 flex items-center font-bold md:text-2xl gap-2 underline'>
            <CookingPot />
            Cooking Procedure:
          </h2>

          <section>
            <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
              <div className='flex md:flex-row flex-col-reverse md:gap-0 gap-5 lg:items-center md:items-start md:justify-between'>
                {/* text section */}
                <div className='lg:basis-[60%] md:basis-[50%]'>
                  <div className='max-w-prose md:max-w-none'>
                    <h2 className='text-2xl font-semibold text-gray-900 dark:text-gray-200 sm:text-3xl'>
                      {strMeal}
                    </h2>

                    <p className='mt-4 text-gray-700 dark:text-gray-300'>
                      {strInstructions}
                    </p>
                  </div>
                </div>

                {/* image */}
                <div className='lg:basis-[30%] md:basis-[40%] lg:pt-0 md:pt-14'>
                  <LazyLoadImage
                    src={strMealThumb}
                    alt={strMeal}
                    className='lg:h-96 lg:w-96 object-cover rounded-md'
                    effect='blur'
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default MealCardDetails;
