import React, {useEffect, useState} from 'react';
import * as Keychain from 'react-native-keychain';
import DefaultPreference from 'react-native-default-preference';
import CryptoJS from 'crypto-js';

import {Container, Block, Title, Button, Span} from '../../utils/global.styled';
import {TextArea, ButtonWrapper} from './notes.styled';

const Notes = ({route, navigation}) => {
  const {password} = route.params;
  const [message, setMessage] = useState('');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      DefaultPreference.get('cryptoNotesMessage').then(function (value) {
        console.log('Get message');
        if (value) {
          const decrypted = CryptoJS.AES.decrypt(value, password);
          setMessage(decrypted.toString(CryptoJS.enc.Utf8));
        }
      });
    });

    return unsubscribe;
  }, []);
  const logOut = () => {
    const encrypted = CryptoJS.AES.encrypt(message, password);
    DefaultPreference.set('cryptoNotesMessage', encrypted.toString()).then(
      function () {
        console.log('Set message');
      },
    );
    navigation.navigate('Login');
  };
  const forgetPassword = async () => {
    await Keychain.resetGenericPassword();
    DefaultPreference.clear('cryptoNotesMessage').then(() => {
      console.log('Remove message');
    });
    navigation.navigate('Register');
  };
  return (
    <Container>
      <Block>
        <Title>Notes</Title>
        <TextArea
          onChangeText={setMessage}
          value={message}
          multiline
          numberOfLines={4}
          placeholder="Type message..."
        />
        <ButtonWrapper>
          <Button onPress={logOut}>
            <Span>Log out</Span>
          </Button>
          <Button onPress={forgetPassword}>
            <Span>Change password</Span>
          </Button>
        </ButtonWrapper>
      </Block>
    </Container>
  );
};

export default Notes;
