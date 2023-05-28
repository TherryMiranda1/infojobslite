import { styled } from "styled-components";

export const AppContainer = styled.main`
  margin: 0;
  padding: 0;

  min-height: 100%;
  max-width: 1400px;
`;

export const ContentStyled = styled.div`
  margin: auto;
  background: ${({ theme: { colors } }) => colors.infojobsGray};
`;
