import { DateTime } from "luxon";
import styled from "styled-components";

function DiaryItem({ content, date }) {
  return (
    <Wrap>
      <DateWrap>
        <DateText>
          {DateTime.fromISO(date).toFormat("yyyy년 MM월 dd일")}
        </DateText>
      </DateWrap>
      <ContentWrap>
        <ContentText>{content}</ContentText>
      </ContentWrap>
    </Wrap>
  );
}

const Wrap = styled.View`
  height: 128px;

  background: #2c2c2c;

  margin: 0 0 24px;
  border-radius: 8px;
  padding: 16px 20px;
`;

const DateWrap = styled.View`
  height: 32px;

  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;
const DateText = styled.Text`
  font-size: 18px;
  font-weight: regular;
  color: #ccc;
  margin: 0 0 0 2px;
`;

const ContentWrap = styled.View`
  flex: 1;
  padding: 8px 4px;
`;
const ContentText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export { DiaryItem };
