/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  YellowBox
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './AppStyle.js';
import LoginScreen from './components/Login/LoginScreen.js';
import HomeScreen from './components/Home/HomeScreen.js';
import UserCenterScreen from './components/UserCenter/UserCenterScreen.js';
import UserListScreen from './components/UserList/UserListScreen.js';
import BaiduMap from './components/BaiduMap/BaiduMap.js';
import QrCodeScreen from './components/QrCode/QrCodeScreen.js';
//import QrCodeScreen from './components/QrCode/QRScanner.js';


let routes = [{
  name:'Home',
  screen:HomeScreen,
  iconName:'home',
  headerTitle:'首页',
},{
  name:'UserCenter',
  screen:UserCenterScreen,
  iconName:'user-circle',
  headerTitle:'个人中心',
},{
  name:'UserList',
  screen:UserListScreen,
  iconName:'user-circle',
  headerTitle:'用户列表',
}];

const formatRoutes = () => {
  let temp = {};
  routes.map(item => {
    item.navigationOptions = {
      tabBarIcon: ({
        focused,
        tintColor
      }) => (
        <Icon name={item.iconName} style={{color:tintColor,fontSize:25}} />),
      headerTitle:item.headerTitle,
      tabBarLabel:item.headerTitle,
    }
    temp[item.name] = item;
  })
  return temp;
}
/*const routes = {
  Login:{
    screen:LoginScreen,
  },
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerTitle:'首页',
    }
  }
}*/

const Tab = TabNavigator(formatRoutes(),{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: 'initialRoute',
    initialRouteName: "",
    lazy: true,
    indicatorStyle: styles.tabBarIndicator,
    tabBarOptions: {
        showLabel: true,
        activeTintColor: 'black',
        inactiveTintColor: '#979797',
        style: {
            backgroundColor: '#f7f7f7',
        },
    },
});

const Navigator = StackNavigator({
  Login:{
    screen:LoginScreen,
    navigationOptions:{
      headerTitle:'登录',
      headerTitleStyle:{
        color:'white',
        alignSelf:'center'
      },
      headerStyle:{
        backgroundColor:'#6495ed',
      }
    }
  },
  QrCode:{
    screen:QrCodeScreen,
    navigationOptions:{
      headerTitle:'扫码',
      headerTitleStyle:{
        color:'white',
        alignSelf:'center'
      },
      headerStyle:{
        backgroundColor:'#6495ed',
      }
    }
  },
  BaiduMap:{
    screen:BaiduMap,
    navigationOptions:{
      headerTitle:'地图',
      headerTitleStyle:{
        color:'white',
        alignSelf:'center'
      },
      headerStyle:{
        backgroundColor:'#6495ed',
      }
    }
  },
  Tab:{
    screen:Tab,
  }
},{
  navigationOptions:{
    /*headerTitleStyle:{
      color:'white',
      marginLeft:100,
    },*/
    headerStyle:{
      backgroundColor:'#6495ed',
    }
  }
})


export default class App extends Component<{}> {
  render() {
    return <Navigator />
  }
}

