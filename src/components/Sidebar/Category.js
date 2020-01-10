import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CategoryLink from 'components/Sidebar/CategoryLink';

const Category = ({ heading, list }) => {
  const Heading = styled.h3`
    margin-bottom: 20px;
    padding-top: 50px;
    padding-left: 34px;
    color: ${({ theme }) => theme.color.tenth};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-family: 'Rubik', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-transform: uppercase;

    @media screen and (max-width: 1063px) {
      display: none;
    }
  `;
  const CategoryContent = styled.ul`
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
    padding: 15px 0 0 0;
    list-style-type: none;
    border-top: 1px solid;
    border-color: ${({ theme }) => theme.border};
  `;

  return (
    <div>
      <Heading>{heading}</Heading>
      <CategoryContent>
        {list.map(item => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <CategoryLink key={item.title} {...item} />;
        })}
      </CategoryContent>
    </div>
  );
};

Category.propTypes = {
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Category;
