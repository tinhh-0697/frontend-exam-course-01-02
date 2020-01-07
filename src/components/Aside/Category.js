import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CategoryLink from 'components/Aside/CategoryLink';

const index = ({ heading, list }) => {
  const Category = styled.div`
    /* background-color: ${props => props.theme.background}; */
  `;
  const Heading = styled.h3`
    margin-bottom: 20px;
    padding-top: 50px;
    padding-left: 34px;
    color: #bcbfc4;
    font-size: 18px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  `;
  const CategoryContent = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 15px 0 0 0;
    margin-bottom: 6px;
    border-top: 1px solid;
    border-color: ${props => props.theme.border};
  `;
  return (
    <Category>
      <Heading>{heading}</Heading>
      <CategoryContent>
        {list.map(item => {
          const { icon, title, path } = item;
          return <CategoryLink key={title} icon={icon} title={title} path={path} />;
        })}
      </CategoryContent>
    </Category>
  );
};

index.propTypes = {
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default index;
