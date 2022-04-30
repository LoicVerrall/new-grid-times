import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar, last }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper last={last}>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  border-bottom: ${props => props.last ? 'none' : '2px solid var(--color-gray-300)'};
  padding: 16px 0;
  display: grid;
  grid-template-columns: auto 50px;
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-column: 2 / 3;
  grid-row: 1 / 4;

  @media${QUERIES.tabletOnly} {
    grid-column: 1 / 3;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
  grid-column: 1 / 3;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  grid-column: 1 / 3;
`;

export default OpinionStory;
