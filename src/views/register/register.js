import React, {useState, useEffect} from 'react';
import bcrypt from 'react-native-bcrypt';
import * as Keychain from 'react-native-keychain';

import {
  Container,
  Block,
  Title,
  StyleText,
  Input,
  Button,
  Span,
} from '../../utils/global.styled';

const Register = ({navigation}) => {
  const [password, setPassword] = useState('');
  const register = () => {
    bcrypt.hash(password, 12, async (err, hash) => {
      await Keychain.setGenericPassword('user', hash);
      navigation.navigate('Login');
      setPassword('');
    });
  };
  return (
    <Container>
      <Block>
        <Title>Set password</Title>
        {/* <StyleText>Username: </StyleText>
        <Input placeholder="username" /> */}
        <StyleText>Password: </StyleText>
        <Input
          onChangeText={setPassword}
          secureTextEntry
          placeholder="password"
          value={password}
        />
        <Button onPress={register}>
          <Span>Register</Span>
        </Button>
      </Block>
    </Container>
  );
};

export default Register;
