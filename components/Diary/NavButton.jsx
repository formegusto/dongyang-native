import { TouchableOpacity } from "react-native";
import styled from "styled-components";

function NavButton({ children, ...buttonProps }) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...buttonProps}>
      <NavButtonStyle>
        <NavText>{children}</NavText>
      </NavButtonStyle>
    </TouchableOpacity>
  );
}

const NavButtonStyle = styled.View`
  width: 100%;
  height: 48px;

  justify-content: center;
  align-items: center;

  background: #333;
`;

const NavText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export default NavButton;
