import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>

        <View style={{backgroundColor: 'hotpink', flex: 1}} >
          <Text>App Base + navStack </Text>
          <Icon name="mustache" size={30} color="#900" />
        </View>

      </NavigationContainer>
    </GestureHandlerRootView>
)
}

export default App;
