import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import { Container } from './Container';
import { HeaderEl } from './headerComponents/HeaderEl';
import { Title } from './headerComponents/Title';
import { Wrapper } from './headerComponents/Wrapper';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
`;

const Header = () => {
  const [theme, setTheme] = useState('light');
  const ToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(
    () => {
      document.body.setAttribute('data-theme', theme);
    },
    [theme]
  );
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={ToggleTheme}>
            {theme === 'light'
              ? <IoMoonOutline size="14px" />
              : <IoMoon size="14px" />}{' '}
            <span style={{ marginLeft: '0.75rem' }}> {theme} theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
