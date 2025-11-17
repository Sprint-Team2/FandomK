import { media } from "@/styles/media";
import styled from "styled-components";

export const Contaier = styled.section`
  padding-left: 24px;
  margin-bottom: 40px;

  @media ${media.tablet} {
    margin-bottom: 60px;
  }

  @media ${media.desktop} {
    width: 1200px;
    margin: 0 auto;
    padding-left: 0;
    margin-bottom: 80px;
  }
`;

export const DonationTitle = styled.h2`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.6rem;

  @media ${media.tablet} {
    font-size: 2rem;
  }

  @media ${media.desktop} {
    font-size: 2.4rem;
  }
`;
