import styled from "styled-components/native";

function TodosInputs() {
  return (
    <Wrap>
      <Input />
    </Wrap>
  );
}

const Wrap = styled.View`
  background: #fff;
  padding: 8px 24px;
`;

const Input = styled.TextInput``;

export { TodosInputs };
