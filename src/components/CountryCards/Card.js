import React from 'react';
import styled from 'styled-components';
import { CardImage } from './Styles/CardImage';
import { CardList } from './Styles/CardList';
import { CardTitle } from './Styles/CardTitle';
import { Wrapper } from './Styles/Wrapper';
import { CardListItem } from './Styles/CardListItem';

const CardBody = styled.div`padding: 1rem 1.5rem 2rem;`;

const Card = ({ img, name, info, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>
          {' '}{name}{' '}
        </CardTitle>
        <CardList>
          {info.map(el =>
            <CardListItem key={el.title}>
              <b> {el.title}:</b> {el.description}
            </CardListItem>
          )}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
