import PropTypes from 'prop-types';
import { Button } from '../ui/button';
import { Link } from 'react-router';

const MealCard = ({ item }) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strTags,
    strInstructions,
    strYoutube,
    strMealThumb,
  } = item || {};
  return (
    <div>
      <article className='overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg'>
        <img
          alt={strMeal}
          src={strMealThumb}
          className='h-56 w-full object-cover'
        />

        <div className='bg-white dark:bg-neutral-600 p-4 sm:p-6'>
          <time
            datetime='2022-10-10'
            className='block text-xs text-gray-500 dark:text-gray-300'
          >
            {' '}
            Category: {strCategory}{' '}
          </time>

          <a href='#'>
            <h3 className='mt-0.5 text-lg text-gray-900 dark:text-gray-100'>
              Name: {strMeal}
            </h3>
          </a>

          <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-300'>
            <span className='font-bold'>Instructions:</span>{' '}
            {strInstructions?.slice(0, 80) + '...'}
          </p>

          <p className='text-sm font-bold text-gray-700 dark:text-gray-300'>
            Tag# <span className='font-normal italic underline'>{strTags? 'strTags': 'None'}</span>
          </p>

          <div className='mt-3 flex flex-row items-center justify-between'>
            <Button variant='destructive' asChild>
              <a href={strYoutube} target='_blank'>
                YouTube
              </a>
            </Button>

            <Button asChild>
              <Link to={`/browse/${idMeal}`}>Details</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

MealCard.propTypes = {
  item: PropTypes.object,
};

export default MealCard;
