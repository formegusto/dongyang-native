import { useHeaderHeight } from "@react-navigation/stack";
import styled from "styled-components";

export function ReativeContainer({ children }) {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={headerHeight}>
      {children}
    </KeyboardView>
  );
}

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
`;
