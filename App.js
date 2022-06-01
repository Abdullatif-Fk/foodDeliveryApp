import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {CartTab, MainLayout} from './screens';
import CustomDrawer from './navigation/CustomDrawer/CustomDrawer';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={CustomDrawer} />
        {/* <Stack.Screen name="cart" component={CartTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
