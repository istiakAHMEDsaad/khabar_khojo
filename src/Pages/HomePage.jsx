import { Button } from '@/components/ui/button';
import heroImage from '../assets/food.webp';
import { TypographyH3 } from '../components/Typography/TypographyH3';
import {
  Search,
  Book,
  ChefHat,
  Flag,
  UtensilsCrossed,
  Salad,
} from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';
import { useEffect, useState, CSSProperties } from 'react';
import { toast, Bounce } from 'react-toastify';
import { MoonLoader } from 'react-spinners';
import { Link } from 'react-router';

const HomePage = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const limitedData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_apiUrl}`
        );
        const sixData = res?.data?.meals?.slice(0, 8) || [];

        setMeals(sixData);
      } catch (err) {
        toast.error(err?.message, {
          position: 'top-right',
          autoClose: 5000,
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
    limitedData();
  }, []);

  return (
    <main className='mb-8'>
      <div
        className='hero min-h-screen mb-10'
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className='hero-overlay'></div>
        <div className='hero-content text-neutral-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Food Recipes</h1>
            <p className='mb-5'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-5'>
        {/* typewrite */}
        <div className='flex flex-row items-center font-sans gap-2'>
          <span className='text-2xl font-semibold italic text-red-500'>
            <Typewriter
              words={['Search']}
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <Search />

          <span className='text-2xl font-semibold italic text-blue-500'>
            <Typewriter
              words={['Learn']}
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
          <Book />

          <span className='text-2xl font-semibold italic text-amber-500'>
            <Typewriter
              words={['Cook']}
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
          <ChefHat />
        </div>

        {/* card section */}
        {loading && (
          <MoonLoader loading={loading} size={40} color='rgba(6,182,212, 1)' />
        )}
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4'>
          {meals?.map((meal) => (
            <div key={meal?.idMeal}>
              <div className='block rounded-lg p-4 shadow-xs shadow-indigo-100 hover:scale-[98%] transition-transform'>
                <img
                  alt={`${meal?.strMeal} image`}
                  src={meal?.strMealThumb}
                  className='h-56 w-full rounded-md object-cover'
                />

                {/* text */}
                <div className='mt-2'>
                  <dl>
                    <div className='text-sm text-gray-500 flex flex-row items-center gap-1'>
                      <span>
                        <Flag size={15} />
                      </span>
                      <span>{meal?.strArea} dish</span>
                    </div>

                    <div className='font-medium flex flex-row items-center gap-2'>
                      <span>
                        <UtensilsCrossed size={20} />
                      </span>
                      <span>{meal?.strMeal}</span>
                    </div>
                  </dl>

                  <div className='mt-6 flex items-center lg:gap-4 md:gap-0 gap-5 text-xs'>
                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <Salad className='text-gray-500' />

                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Items 1</p>
                        <p className='font-medium'>
                          {meal?.strIngredient1 ? meal?.strIngredient1 : 'Null'}
                        </p>
                      </div>
                    </div>

                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <Salad className='text-gray-500' />

                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Items 2</p>
                        <p className='font-medium'>
                          {meal?.strIngredient2 ? meal?.strIngredient2 : 'Null'}
                        </p>
                      </div>
                    </div>

                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 lg:flex md:hidden'>
                      <Salad className='text-gray-500' />

                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Items3</p>
                        <p className='font-medium'>
                          {meal?.strIngredient3 ? meal?.strIngredient3 : 'Null'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Link to={'/browse'}><Button>Browse All</Button></Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
