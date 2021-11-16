import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #222;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyleText = styled.Text`
  color: white;
  margin-bottom: 3px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 26px;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const Block = styled.View`
  width: 90%;
  max-height: 40%;
  border-radius: 30px;
  background-color: #333;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 70%;
  height: 30px;
  border-radius: 10px;
  background-color: #bbb;
  padding: 0 5px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 10px;
  border: 1px solid #bbb;
  padding: 5px 20px;
  margin-bottom: 5px;
`;

export const Span = styled.Text`
  color: white;
`;
