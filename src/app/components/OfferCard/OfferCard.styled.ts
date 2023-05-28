import styled from "styled-components";

export const OffersContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 680px) {
    gap: 8px;
  }
`;

export const OfferCardStyled = styled.article`
  width: 300px;
  height: 310px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1;
  padding: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  color: #000000;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 28px;
  transition: all 0.4s ease-in-out;
  img {
    width: 100px;
    aspect-ratio: 1;
    border-radius: 18px;
  }
  a {
    text-decoration: none;
    color: #000000;
    font-size: 14px;
  }
  h3 {
    margin: 0;
    font-size: 16px;
  }

  &:hover {
    background: #bbfafc;
  }
  @media (max-width: 680px) {
    width: 100%;
    border-radius: 0;
  }
`;
export const CardTextsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #89898a;
  padding-top: 12px;
  p {
    margin: 0;
  }
`;

export const CardTitleContainer = styled.section`
  height: 95px;
`;
