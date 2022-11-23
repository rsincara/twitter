import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 32px;

  font-size: 52px;

  text-align: center;
`;

export const FormWrapper = styled.div`
  display: flex;

  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;

  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const InputTitle = styled.div`
  margin-bottom: 4px;
`;

export const HideShowPassword = styled.button`
  display: block;
  position: absolute;
  right: 5px;
  bottom: 5px;
  border: 0;
  padding: 2px;
  background: #dedede;
  border-radius: 3px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;

  font-size: 16px;

  outline: 0;
  border: 1px solid #dedede;
  border-radius: 6px;
  padding-left: 4px;
`;

export const ButtonWrapper = styled.div`
  margin: 16px auto 0;
`;

export const SubmitButton = styled.button`
  display: inline-flex;

  background: #2abe36;

  color: #ffffff;

  font-size: 24px;

  padding: 4px 8px;

  outline: 0;

  border: 0;

  border-radius: 4px;

  cursor: pointer;
`;

export const Result = styled.div`
  margin-top: 32px;

  text-align: center;
  font-size: 16px;
`;