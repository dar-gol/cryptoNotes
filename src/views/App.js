import React from 'react';
import bcrypt from 'react-native-bcrypt';
import isaac from 'isaac';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './login/login';
import Register from './register/register';
import Notes from './notes/notes';

const Stack = createNativeStackNavigator();

bcrypt.setRandomFallback(len => {
  const buf = new Uint8Array(len);

  return buf.map(() => Math.floor(isaac.random() * 256));
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
