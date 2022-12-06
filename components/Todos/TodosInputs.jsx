import styled from "styled-components/native";

function TodosInputs({ input, onChange }) {
  return (
    <Wrap>
      <Input
        value={input}
        onChange={onChange}
        placeholder="할 일을 입력해주세요."
      />
      <Button title="전송" />
    </Wrap>
  );
}

const Wrap = styled.View`
  flex-direction: row;

  /* background: #fff; */
  padding: 8px 24px;
`;

const Input = styled.TextInput`
  flex: 1;
  margin: 0 8px 0 0;
`;

const Button = styled.Button``;

export { TodosInputs };
