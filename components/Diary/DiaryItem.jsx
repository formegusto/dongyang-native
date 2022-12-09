import { DateTime } from "luxon";
import styled from "styled-components";
import { IconButton } from "../../styles";
import { AntDesign } from "@expo/vector-icons";
import { DiaryContext } from "../../context";
import React from "react";

function DiaryItem({ id, content, date }) {
  const { onDelete, pushUpdateScreen } = React.useContext(DiaryContext);

  return (
    <Wrap>
      <WrapGroup>
        <DateWrap>
          <DateText>
            {DateTime.fromISO(date).toFormat("yyyy년 MM월 dd일")}
          </DateText>
        </DateWrap>
        <IconWrap>
          <IconButton onPress={() => pushUpdateScreen(id)}>
            <AntDesign name="edit" size={20} color="#fff" />
          </IconButton>
          <IconButton onPress={() => onDelete(id)}>
            <AntDesign name="delete" size={20} color="#fff" />
          </IconButton>
        </IconWrap>
      </WrapGroup>
      <ContentWrap>
        <ContentText>{content}</ContentText>
      </ContentWrap>
    </Wrap>
  );
}

const Wrap = styled.View`
  background: #2c2c2c;

  margin: 0 0 24px;
  border-radius: 8px;
  padding: 20px 20px 24px;
`;

const WrapGroup = styled.View`
  flex-direction: row;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  padding: 0 0 4px;
`;

const DateWrap = styled.View`
  height: 32px;
  flex: 1;
`;
const DateText = styled.Text`
  font-size: 18px;
  font-weight: regular;
  color: #ccc;
  margin: 0 0 0 2px;
`;

const ContentWrap = styled.View`
  height: 80px;
  padding: 10px 4px;
`;
const ContentText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const IconWrap = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export { DiaryItem };
