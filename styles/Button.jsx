import { Pressable } from "react-native";
import styled from "styled-components/native";

const ButtonStyle = styled.View`
  background-color: rgb(69, 121, 252);

  width: 120px;
  height: 48px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  margin: 24px 0 0;
`;

const ButtonText = styled.Text`
  font-size: 24px;

  color: #fff;
`;

export function Button({ children, ...buttonProps }) {
  return (
    <Pressable {...buttonProps}>
      <ButtonStyle>
        <ButtonText>{children}</ButtonText>
      </ButtonStyle>
    </Pressable>
  );
}
