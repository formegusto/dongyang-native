import React from "react";
import styled from "styled-components";

function ExRateInput({ mode, onCalc }) {
  const [input, setInput] = React.useState("");

  const onChange = React.useCallback((value) => {
    setInput(value);
  }, []);
  return (
    <Wrap>
      <PrefixText>{mode === "DtoW" ? "$" : "₩"}</PrefixText>
      <Input
        placeholder="달러를 입력해주세요."
        value={input}
        onChangeText={onChange}
      />
      <Button title="계산" onPress={() => onCalc(input)} />
    </Wrap>
  );
}

const Wrap = styled.View`
  flex-direction: row;
  padding: 8px 0 0px;

  align-items: center;
`;

const PrefixText = styled.Text`
  font-size: 24px;

  margin: 0 12px 0 0;
`;

const Input = styled.TextInput`
  flex: 1;
  margin: 0 8px 0 0;
`;

const Button = styled.Button``;

export { ExRateInput };
