import _ from "lodash";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { Button } from "../../styles";
import { LottoItem } from "./LottoItem";

function LottoComponent({ items, onPress }) {
  return (
    <Wrap>
      <ItemWrap>
        {_.map(items, (item, idx) => (
          <LottoItem key={`item-${idx}`} item={item} />
        ))}
      </ItemWrap>
      <Button onPress={onPress}>재추첨</Button>
    </Wrap>
  );
}

const Wrap = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

const ItemWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export { LottoComponent };
