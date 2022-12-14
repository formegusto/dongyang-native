import styled from "styled-components";
import { ExRateInput } from "./ExRateInput";
import Constants from "expo-constants";
import { ReativeContainer } from "../../styles";
import { ExRateView } from "./ExRateView";
import { DateTime } from "luxon";

export * from "./ExRateInput";

function ExRateComponent({ mode, rate, onCalc, onToggleMode }) {
  return (
    <ReativeContainer>
      <Wrap>
        <ExRateView {...{ mode, rate, onToggleMode }} />
        <ExRateInput {...{ mode, onCalc }} />
        <DateText>
          {DateTime.fromISO("2022-12-14").toFormat("yyyy년 MM월 dd일")} 기준 $1
          = ₩1,298.60
        </DateText>
      </Wrap>
    </ReativeContainer>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;

  align-items: center;
  justify-content: center;

  margin: 0 24px 0;
`;

const DateText = styled.Text`
  margin: 12px 0 0;
  color: #aaa;
`;

export { ExRateComponent };
