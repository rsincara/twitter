import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const Header = styled.header`
  background: #50d8ea;

  height: 100px;

  color: #fafafa;

  padding: 0 32px;

  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  height: 100%;
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: inherit;
`;

export const NavItem = styled(NavLink)`
    color: inherit;
    margin: 1em;
    font-size: 20px;
    text-decoration: none;
`