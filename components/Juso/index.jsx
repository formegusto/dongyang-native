import React from "react";
import styled from "styled-components";
import { getJuso } from "../../api";
import { ReativeContainer } from "../../styles";
import JusoInput from "./JusoInput";
import JusoItem from "./JusoItem";

function JusoComponent() {
  const [list, setList] = React.useState([]);

  const onSearch = React.useCallback(async (keyword) => {
    try {
      const res = await getJuso(keyword);
      const data = res.data;

      const msg = data.results.common.errorMessage;
      if (msg !== "정상") throw new Error(msg);
      setList(data.results.juso);
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <Wrap>
      <ReativeContainer>
        <JusoInput onSearch={onSearch} />
        <JusoList
          data={list}
          renderItem={({ item }) => <JusoItem {...item} />}
          keyExtractor={(item) => item.rnMgtSn + item.roadAddr}
          ItemSeparatorComponent={<ListSeparator />}
        />
      </ReativeContainer>
    </Wrap>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
`;

const JusoList = styled.FlatList`
  flex: 1;
  padding: 0 24px;
`;

const ListSeparator = styled.View`
  height: 0.5px;
  background: #999;
`;

export { JusoComponent };
