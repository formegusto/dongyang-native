import styled from "styled-components";

const image = { url: "https://placeimg.com/1280/1280/nature" };

function ClockComponent({ date }) {
  return (
    <Container source={image} resizeMode="cover">
      <DateText>{date.toFormat("HH:mm:ss")}</DateText>
    </Container>
  );
}

const Container = styled.ImageBackground`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

const DateText = styled.Text`
  font-size: 64px;
  color: #fff;
  font-weight: 900;
`;

export { ClockComponent };
