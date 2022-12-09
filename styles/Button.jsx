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
  font-size: 20px;
  font-weight: bold;

  color: #fff;
`;

const IconButtonStyle = styled.View`
  margin: 0 8px 0 0;
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

export function IconButton({ children, ...buttonProps }) {
  return (
    <Pressable {...buttonProps}>
      <IconButtonStyle>{children}</IconButtonStyle>
    </Pressable>
  );
}
