import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/Screen4';
import Screen5 from '../Screens/Screen5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const TabNavigator = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <TabNavigator.Navigator >
      <TabNavigator.Screen name="Screen1" component={Screen1}
        options={{
          tabBarLabel: 'Screen1',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />

      <TabNavigator.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarLabel: 'Screen2',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera-image" color={color} size={size} />
          )
        }}
      />

      <TabNavigator.Screen name="Screen3"
        component={Screen3}
        options={{
          tabBarLabel: 'Screen3',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-transfer-outline" color={color} size={size} />
          )
        }}
      />


    </TabNavigator.Navigator>
  );
};

const DrawerNavigator = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <DrawerNavigator.Navigator
      drawerStyle={{
        backgroundColor: '#fff',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <DrawerNavigator.Screen name="BottomTabs" component={BottomTabs} />
      <DrawerNavigator.Screen name="Screen4" component={Screen4} />


    </DrawerNavigator.Navigator>
  );
};

const DrawerContent = props => {

  return (
    <>
      <DrawerContentScrollView
        contentContainerStyle={{
          marginVertical: 25,
          marginHorizontal: 15,
          paddingBottom: 35,
        }}
        showsVerticalScrollIndicator={false}>

        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name='numeric-1-box-multiple' />
          )}
          label="Screen 1"
          labelStyle={drawerStyles.labelStyle}
          onPress={() => {
            props.navigation.navigate('Screen1');
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name='numeric-2-box-multiple' />
          )}
          label="Screen 2"
          labelStyle={drawerStyles.labelStyle}
          onPress={() => {
            props.navigation.navigate('Screen2');
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name='numeric-3-box-multiple' />
          )}
          label="Screen 3"
          labelStyle={drawerStyles.labelStyle}
          onPress={() => {
            props.navigation.navigate('Screen3');
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name='numeric-4-box-multiple' />
          )}
          label="Screen 4"
          labelStyle={drawerStyles.labelStyle}
          onPress={() => {
            props.navigation.navigate('Screen4');
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name='numeric-5-box-multiple' />
          )}
          label="Screen 5"
          labelStyle={drawerStyles.labelStyle}
          onPress={() => {
            props.navigation.navigate('Screen5');
          }}
        />

      </DrawerContentScrollView>

    </>
  );
};

const drawerStyles = StyleSheet.create({
  drawerCloseIcon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingRight: 2,
    position: 'absolute',
    right: -15,
    top: 35,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#EEEEF2',
    borderBottomWidth: 2,
    paddingBottom: 20,
  },
  labelStyle: {
    color: '#000',
    fontSize: 14,
    alignItems: 'center',
  },
});

const HomeStack = createStackNavigator();

export default class MainNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <HomeStack.Navigator
          initialRouteName="HomeDrawer"
          screenOptions={{ headerShown: false }}>
          <HomeStack.Screen name="HomeDrawer" component={HomeDrawer} />

          <HomeStack.Screen
            name="Screen5"
            component={Screen5}
          />

        </HomeStack.Navigator>
      </NavigationContainer>
    );
  }
}
