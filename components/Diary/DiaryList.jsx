import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { DiaryContext } from "../../context";
import { DiaryItem } from "./DiaryItem";

function DiaryList() {
  const { diaries } = React.useContext(DiaryContext);

  return (
    <Wrap>
      {_.map(diaries, (diary) => (
        <DiaryItem key={diary.id} {...diary} />
      ))}
    </Wrap>
  );
}

const Wrap = styled.ScrollView`
  flex: 1;
  padding: 16px 24px;
`;

export { DiaryList };
