import React from 'react';
import {StatusBar, View, StyleSheet, Platform} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TabBarItem from 'screens/components/TabBarItem';

// import ChatScreen from '../screens/ChatScreen';

// import AuthLoadingScreen from './root/AuthLoadingScreen';

import color from 'theme/color';

import Home from 'screens/Content/Home';

import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const BottomTabNavigatorConfig = {
  // tabBarComponent: null,
  initialRouteName: 'Home',
  backBehavior: 'history',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  mode: 'card',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: color.primaryColor,
    inactiveTintColor: color.inputTextColor,
    style: {
      backgroundColor: color.textIcons,
      height: 60,
    },
    labelStyle: {
      marginTop: -4,
      fontSize: 12,
    },
    indicatorStyle: {
      height: 0,
    },
  },
  navigationOptions: {
    headerMode: 'float',
    headerTitleAllowFontScaling: false,
    headerTintColor: color.textIcons,
    headerLeft: null,
    headerStyle: {
      height: 0,
      paddingTop: 0,
      backgroundColor: color.textIcons,
    },
  },
};

// Bagian ini sudah login.
const Main = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({
        Home,
      }),
      navigationOptions: () => {
        return {
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="home"
            />
          ),
        };
      },
    },
    Search: {
      screen: createStackNavigator({
        Home,
      }),
      navigationOptions: () => {
        return {
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="search1"
              type="AntDesign"
            />
          ),
        };
      },
    },
    Event: {
      screen: createStackNavigator({
        Home,
      }),
      navigationOptions: () => {
        return {
          tabBarLabel: 'Event',
          tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="calendar"
            />
          ),
        };
      },
    },
    Profile: {
      screen: createStackNavigator({
        Home,
      }),
      navigationOptions: () => {
        return {
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="user"
              type="AntDesign"
            />
          ),
        };
      },
    },
  },
  BottomTabNavigatorConfig,
);

// Bagian ini membutuhkan Login First.
const MainAuth = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({
        Home,
      }),
      navigationOptions: () => {
        return {
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="home"
            />
          ),
        };
      },
    },
    Search: {
      screen: createStackNavigator({
        Home,
      }),
      navigationOptions: () => {
        return {
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="search1"
              type="AntDesign"
            />
          ),
        };
      },
    },
    Event: {
      screen: Login,
      navigationOptions: () => {
        return {
          tabBarLabel: 'Event',
          tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="calendar"
            />
          ),
        };
      },
    },
    Login: {
      screen: Login,
      navigationOptions: () => {
        return {
          tabBarLabel: 'Login',
          tabBarIcon: ({focused, tintColor}) => (
            <TabBarItem
              focused={focused}
              tintColor={tintColor}
              iconName="user"
              type="AntDesign"
            />
          ),
        };
      },
    },
  },
  BottomTabNavigatorConfig,
);

// Routes sudah login
const RequireAuth = createStackNavigator(
  {
    Main,
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerMode: 'float',
      headerTitleAllowFontScaling: false,
      headerTintColor: 'color.primaryColor',
      headerStyle: {
        height: 0,
        paddingTop: 0,
        color: color.textIcons,
        backgroundColor: color.primaryColor,
      },
    },
  },
);

// Routes harus login
const LoginStack = createStackNavigator(
  {
    Main: MainAuth,
    Register,
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerMode: 'float',
      headerTitleAllowFontScaling: false,
      headerTintColor: 'color.primaryColor',
      headerStyle: {
        height: 0,
        paddingTop: 0,
        color: color.primaryColor,
        backgroundColor: color.primaryColor,
      },
    },
  },
);

// const LandingPage = createStackNavigator({
//   screen: LandingPageScreen,
// });

const AppNavigator = createSwitchNavigator(
  {
    // LandingPage,
    // AuthLoading: AuthLoadingScreen,
    App: RequireAuth,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(AppNavigator);

class Routes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor={color.primaryColor}
        />
        <AppContainer
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </View>
    );
  }
}

export default Routes;
