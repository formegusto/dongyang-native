import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import styled, { css } from "styled-components";
import { TodosContext } from "../../context";
import { iOSColors } from "../../styles";

function FilterButton({ children, selected, ...buttonProps }) {
  return (
    <Pressable {...buttonProps}>
      <FilterButtonStyle selected={selected}>
        <FilterText selected={selected}>{children}</FilterText>
      </FilterButtonStyle>
    </Pressable>
  );
}

function TodosFilter() {
  const { filter, onChangeFilter } = React.useContext(TodosContext);

  return (
    <Wrap>
      <FilterButton
        selected={typeof filter === "undefined"}
        onPress={() => onChangeFilter()}>
        모두 보기
      </FilterButton>
      <FilterButton
        selected={filter === false}
        onPress={() => onChangeFilter(false)}>
        할 일 보기
      </FilterButton>
      <FilterButton selected={filter} onPress={() => onChangeFilter(true)}>
        끝난 일 보기
      </FilterButton>
    </Wrap>
  );
}

const Wrap = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  margin: 20px 0 16px;
`;

const FilterButtonStyle = styled.View`
  padding: 6px 18px;
  background: #ddd;

  margin: 0 8px 0 0;
  border-radius: 16px;
  box-sizing: border-box;

  ${({ selected }) =>
    selected &&
    css`
      background: ${iOSColors["mint"]};
    `}
`;

const FilterText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
    `}
`;

export { TodosFilter };
