import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767.8px) {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-flow: column;

    > button {
      min-width: 100%;
      padding: 0 15px 0 15px;
    }

    > button:first-child {
      margin-bottom: 20px;
    }
  }
`;
