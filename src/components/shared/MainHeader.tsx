import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const MainHeader: React.SFC<{}> = () => (
  <Header>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </Header>
);
