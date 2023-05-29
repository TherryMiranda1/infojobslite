import { styled } from "styled-components";

export const AppContainer = styled.main`
  margin: 0;
  padding: 10px 0;
  padding-top: 80px;
  min-height: 100%;
  max-width: 1400px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 590px) {
    padding-top: 120px;
  }
`;

export const ContentStyled = styled.div`
  margin: auto;
  background: ${({ theme: { colors } }) => colors.infojobsGray};
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
