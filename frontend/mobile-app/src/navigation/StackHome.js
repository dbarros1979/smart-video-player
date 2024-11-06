import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from '../screens/Home';
import TvSeriesScreen from '../screens/TvSeries';
import DocumentariesScreen from '../screens/Documentaries';
import MyListScreen from '../screens/MyList';

const Stack = createNativeStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animationEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TvSeries"
        component={TvSeriesScreen}
        options={{
          animationEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Documentaries"
        component={DocumentariesScreen}
        options={{
          animationEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MyList"
        component={MyListScreen}
        options={{
          animationEnabled: false,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default StackHome;
