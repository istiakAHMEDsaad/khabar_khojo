import PropTypes from 'prop-types';

export function TypographyH3({
  children,
  textVal,
  textItem,
  animateOne,
  animateTwo,
  animateThree,
  animateFour,
  optionalClass
}) {
  return (
    <h3
      className={`scroll-m-20 md:text-2xl text-xl font-semibold tracking-tight dark:text-gray-200 ${textVal} text-${textItem} ${animateOne} ${animateTwo} ${animateThree} ${animateFour} ${optionalClass}`}
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
  optionalClass: PropTypes.string,
};
