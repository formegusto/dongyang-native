function DiaryUpdate() {
  return (
    <Wrap>
      <ReativeContainer>
        <DiaryInput input={input} onChange={onChange} />
        <NavButton onPress={onAppendPop}>일기 저장</NavButton>
      </ReativeContainer>
    </Wrap>
  );
}

const Wrap = styled.SafeAreaView`
  flex: 1;
`;

export { DiaryUpdate };
