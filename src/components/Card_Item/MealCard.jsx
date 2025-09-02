import PropTypes from 'prop-types';

const MealCard = ({item}) => {
    const {idMeal} = item || {};
  return (
    <div>MealCard: {idMeal}</div>
  )
}

MealCard.propTypes = {
    item: PropTypes.object
}

export default MealCard