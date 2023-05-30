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

interface props {
  children: any;
}

export const ContentStyled = styled.div<props>`
  margin: auto;
  background: ${({ theme: { colors } }) => colors.infojobsGray};
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PageContainer = styled.main`
  padding-top: 50px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
