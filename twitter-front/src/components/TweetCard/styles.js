import styled from 'styled-components';

export const Twit = styled.div`
  width: 300px;
  height: 400px;

  padding: 16px 32px;

  border: 1px solid #3bc4dc;
  border-radius: 4px;

  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  
  background: #ffffff;
  
  overflow: hidden;
  
  transition: .2s;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const Top = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 16px;
`;

export const Author = styled.div`
  font-size: 24px;
  font-weight: 600;
  
  cursor: pointer;
`;

export const Date = styled.div`

`;

export const TwitContent = styled.div`
  font-size: 16px;
`;