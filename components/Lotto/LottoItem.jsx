import styled from "styled-components";

const SIZE = 48;

function LottoItem({ item }) {
  return (
    <Wrap>
      <ItemText>{item}</ItemText>
    </Wrap>
  );
}

const Wrap = styled.View`
  width: ${SIZE}px;
  height: ${SIZE}px;

  border-radius: ${SIZE}px;

  border: 1px solid #333;

  margin: 0 4px 0;

  justify-content: center;
  align-items: center;
`;

const ItemText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #666;
`;

export { LottoItem };
