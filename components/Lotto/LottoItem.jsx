import styled, { css } from "styled-components";
import { numToColor } from "../../utils/color";

const SIZE = 48;

function LottoItem({ item }) {
  return (
    <Wrap bgColor={numToColor(item)}>
      <ItemText>{item}</ItemText>
    </Wrap>
  );
}

const Wrap = styled.View`
  width: ${SIZE}px;
  height: ${SIZE}px;

  border-radius: ${SIZE}px;

  margin: 0 4px 0;

  justify-content: center;
  align-items: center;

  ${({ bgColor }) =>
    css`
      background: ${bgColor};
    `}
`;

const ItemText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #eee;
`;

export { LottoItem };
