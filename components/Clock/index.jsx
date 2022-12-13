import styled from "styled-components";

const image = { url: "https://placeimg.com/1280/1280/nature" };

function ClockComponent({ date }) {
  return (
    <Container source={image} resizeMode="cover">
      <ShadowCont>
        <DateText>{date.toFormat("HH:mm:ss")}</DateText>
      </ShadowCont>
    </Container>
  );
}

const Container = styled.ImageBackground`
  flex: 1;
`;

const ShadowCont = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background: rgba(55, 55, 55, 0.5);
`;

const DateText = styled.Text`
  font-size: 64px;
  color: #fff;
  font-weight: 900;
`;

export { ClockComponent };
