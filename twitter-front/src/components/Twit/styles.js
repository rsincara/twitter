import styled from 'styled-components';

export const Twit = styled.div`
  max-width: 420px;

  margin: 0 auto;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Top = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const Author = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const Date = styled.div`

`;

export const TwitContent = styled.div`
  font-size: 16px;

  padding: 16px 32px;

  border: 1px solid #3bc4dc;
  border-radius: 4px;
`;