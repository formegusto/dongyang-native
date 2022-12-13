import { DateTime } from "luxon";
import styled from "styled-components";
import { IconButton } from "../../../styles";
import { AntDesign } from "@expo/vector-icons";
import { DiaryContext } from "../../../context";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

function DiaryItem({ id, content, date }) {
  const navigation = useNavigation();
  const { onDelete, selectDiary } = React.useContext(DiaryContext);

  const onUpdateScreen = React.useCallback(() => {
    selectDiary(id);
    navigation.push("DiaryUpdate");
  }, [id, selectDiary, navigation]);

  const onDetailScreen = React.useCallback(() => {
    selectDiary(id);
    navigation.push("DiaryDetail");
  }, [id, selectDiary]);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDetailScreen}>
      <Wrap>
        <WrapGroup>
          <DateWrap>
            <DateText>
              {DateTime.fromISO(date).toFormat("yyyy년 MM월 dd일")}
            </DateText>
          </DateWrap>
          <IconWrap>
            <IconButton onPress={onUpdateScreen}>
              <AntDesign name="edit" size={20} color="#fff" />
            </IconButton>
            <IconButton onPress={() => onDelete(id)}>
              <AntDesign name="delete" size={20} color="#fff" />
            </IconButton>
          </IconWrap>
        </WrapGroup>
        <ContentWrap>
          <ContentText numberOfLines={3}>{content}</ContentText>
        </ContentWrap>
      </Wrap>
    </TouchableOpacity>
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
  padding: 12px 4px 4px;
`;
const ContentText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-overflow: ellipsis;
`;

const IconWrap = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export default DiaryItem;
