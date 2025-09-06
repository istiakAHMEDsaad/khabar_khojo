import { useParams } from 'react-router';
import { TypographyH3 } from '../components/Typography/TypographyH3';

const CategoryPage = () => {
  const { id: mealStr } = useParams();

  return (
    <div className='container mx-auto'>
      <p className='md:text-2xl text-xl font-semibold text-gray-700 my-5'>
        Selected Category:{' '}
        <span className='italic text-red-500 animate__animated animate__flash animate__infinite animate__slower'>
          {mealStr}
        </span>
      </p>
    </div>
  );
};

export default CategoryPage;
