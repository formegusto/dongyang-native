import styled from "styled-components";

function TodosContent({ children }) {
  return <Wrap>{children}</Wrap>;
}

const Wrap = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;

export { TodosContent };
