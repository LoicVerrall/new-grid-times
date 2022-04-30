import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} last={index === SECONDARY_STORIES.length - 1} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} last={index === OPINION_STORIES.length - 1} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 24px;
  margin-bottom: 24px;

  @media${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories'
    ;
    grid-template-columns: 60% 1fr;
  }

  @media${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement'
    ;
    grid-template-columns: 40% 1fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media${QUERIES.tabletAndUp} {
    border-right: 2px solid var(--color-gray-300);
    padding-right: 24px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media${QUERIES.laptopAndUp} {
    border-right: 2px solid var(--color-gray-300);
    padding-right: 24px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media${QUERIES.tabletOnly} {
    & > ${StoryList} {
      flex-direction: row;
    }

    & > ${StoryList} > a {
      flex: 1;
    }

    & > ${StoryList} > a > * {
      border-bottom: none;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media${QUERIES.laptopAndUp} {
    border-top: 2px solid var(--color-gray-300);
    padding-top: 24px;
  }
`;

export default MainStoryGrid;
