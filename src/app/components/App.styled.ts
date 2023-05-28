import { styled } from "styled-components";

export const AppContainer = styled.main`
  margin: 0;
  padding: 10px 0;
  min-height: 100%;
  max-width: 1400px;
`;

export const ContentStyled = styled.div`
  margin: auto;
  background: ${({ theme: { colors } }) => colors.infojobsGray};
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
