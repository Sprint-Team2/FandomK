import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgb(225 225 225 / 10%);
  cursor: pointer;

  /* background: ${({ $selected }) => ($selected ? "rgba(249,109,105,0.08)" : "transparent")};
  transition: background 0.2s ease; */
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #f96d69;
  object-fit: cover;
`;

export const Rank = styled.span`
  color: rgb(249 109 105 / 100%);
  font-weight: 400;
  font-size: 14px;
`;

export const TextGroup = styled.div`
  flex: 1;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

export const ListVotes = styled.p`
  margin: 4px 0 0;

  color: #aaa;
  font-weight: 400;
  font-size: 14px;
`;

export const RadioVisual = styled.span`
  display: flex;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ $selected }) => ($selected ? "#F96D69" : "#666")};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $selected }) => ($selected ? "#F96D69" : "transparent")};
    transition: background 0.2s ease;
  }
`;
