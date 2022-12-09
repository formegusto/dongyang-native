import React from "react";
import styled from "styled-components";

function JusoInput({ onSearch }) {
  const [input, setInput] = React.useState("");

  const onChange = React.useCallback((value) => {
    setInput(value);
  }, []);

  return (
    <Wrap>
      <Input value={input} onChangeText={onChange} />
      <Button title="검색" onPress={() => onSearch(input)} />
    </Wrap>
  );
}

const Wrap = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

const Input = styled.TextInput`
  flex: 1;
  margin: 0 8px 0 0;
`;

const Button = styled.Button``;

export default JusoInput;
