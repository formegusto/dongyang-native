import styled from "styled-components";
import { IconButton } from "../../styles";
import { Feather } from "@expo/vector-icons";

function ExRateView({ mode, rate, onToggleMode }) {
  return (
    <Wrap>
      <Text numberOfLines={1}>
        {mode === "DtoW" ? "₩" : "$"}
        {Math.round(rate).toLocaleString(mode === "DtoW" ? "ko-KR" : "en-US")}
      </Text>
      <Button onPress={onToggleMode}>
        <Feather name="refresh-cw" size={24} color="#333" />
      </Button>
    </Wrap>
  );
}

const Wrap = styled.View`
  position: relative;
  width: 100%;
  height: 132px;

  justify-content: flex-end;
  align-items: center;

  margin: 0 0 48px;
`;

const Button = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
`;

const Text = styled.Text`
  font-size: 64px;
  font-weight: 600;

  color: #333;

  text-align: center;
`;

export { ExRateView };
