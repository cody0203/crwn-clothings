import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media (max-width: 767.8px) {
    margin-bottom: 40px;
    padding: 20px;
  }
`;

export default HomePageContainer;
