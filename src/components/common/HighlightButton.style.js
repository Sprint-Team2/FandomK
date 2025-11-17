import { TYPO } from "@/styles/typography";
import styled from "styled-components";

export const Button = styled.button`
  ${TYPO.body14Bold}
  border-radius: 4px;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: var(--color-gray-500);
  }

  ${({ $customStyle }) => $customStyle && $customStyle};
`;
