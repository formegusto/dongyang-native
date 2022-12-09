import _ from "lodash";
import styled from "styled-components";
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
      <Button onPress={onPress} margin={24}>
        재추첨
      </Button>
    </Wrap>
  );
}

const Wrap = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

const ItemWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export { LottoComponent };
