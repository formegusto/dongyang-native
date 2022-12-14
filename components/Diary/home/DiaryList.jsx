import _ from "lodash";
import styled from "styled-components";
import { DiaryItem } from "./DiaryItem";

function DiaryList({ diaries, onUpdateScreen, onDetailScreen, onDelete }) {
  return (
    <Wrap>
      {diaries &&
        _.map(diaries, (diary) => (
          <DiaryItem
            key={diary.id}
            {...{ onUpdateScreen, onDetailScreen, onDelete, ...diary }}
          />
        ))}
    </Wrap>
  );
}

const Wrap = styled.ScrollView`
  flex: 1;
  padding: 16px 24px;
`;

export { DiaryList };
