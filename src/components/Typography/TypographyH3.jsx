import PropTypes from 'prop-types';

export function TypographyH3({
  children,
  textVal,
  textItem,
  animateOne,
  animateTwo,
  animateThree,
  animateFour
}) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight dark:text-gray-200 ${textVal} text-${textItem} ${animateOne} ${animateTwo} ${animateThree} ${animateFour}`}
    >
      {children}
    </h3>
  );
}

TypographyH3.propTypes = {
  children: PropTypes.any,
  textVal: PropTypes.string,
  textItem: PropTypes.string,
  animateOne: PropTypes.string,
  animateTwo: PropTypes.string,
  animateThree: PropTypes.string,
  animateFour: PropTypes.string,
};
