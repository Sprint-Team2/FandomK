import { memo } from "react";

import { Img, Item, ListVotes, Name, RadioVisual, Rank, TextGroup } from "./ListItem.style";

const listItem = ({ id, img, rank, name, votes, selected, onSelect }) => {
  const commaNum = (num) => Number(num).toLocaleString();

  return (
    <Item $selected={selected} onClick={() => onSelect(id)}>
      <Img src={img} alt={name} />
      <Rank>{rank}</Rank>
      <TextGroup>
        <Name>{name}</Name>
        <ListVotes>{commaNum(votes)}표</ListVotes>
      </TextGroup>
      <RadioVisual $selected={selected} />
    </Item>
  );
};

export default memo(listItem);
