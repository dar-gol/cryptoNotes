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

function Login({navigation}) {
  const [credentials, setCredentials] = useState(null);
  const [password, setPassword] = useState('');
  const checkLogin = async () => {
    try {
      // Retrieve the credentials
      const tempCredentials = await Keychain.getGenericPassword();
      if (tempCredentials) {
        setCredentials(tempCredentials);
      } else {
        navigation.navigate('Register');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  };
  const login = () => {
    bcrypt.compare(password, credentials.password, (err, res) => {
      if (res === true) {
        setCredentials(null);
        navigation.navigate('Notes', {password});
      }
      setPassword('');
    });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      checkLogin();
      // Keychain.resetGenericPassword();
    });

    return unsubscribe;
  }, []);
  return (
    <Container>
      <Block>
        <Title>Notes</Title>
        {/* <StyleText>Username: </StyleText>
        <Input placeholder="username" /> */}
        <StyleText>Password: </StyleText>
        <Input
          onChangeText={setPassword}
          secureTextEntry
          placeholder="password"
          value={password}
        />
        <Button onPress={login}>
          <Span>Login</Span>
        </Button>
      </Block>
    </Container>
  );
}

export default Login;
