import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />

        <VerticalStack>
          <Button>
            Subscribe
          </Button>
          <a>
            Already a subscriber?
          </a>
        </VerticalStack>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  @media${QUERIES.laptopAndUp} {
    color: var(--color-gray-900);
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  align-items: end;

  a {
    font-style: italic;
    text-decoration: underline;
    margin-top: 1em;
    color: var(--color-gray-900);
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  ${ActionGroup}, ${VerticalStack} {
    display: none;
  }

  @media${QUERIES.tabletAndUp} {
    margin-top: 60px;
    margin-bottom: 70px;
  }

  @media${QUERIES.laptopAndUp} {
    margin-top: 0;
    justify-content: space-between;

    ${ActionGroup}, ${VerticalStack} {
      display: flex;
    }
  }
`;

export default Header;
