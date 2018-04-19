import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import {
	Button,
	Toast
} from 'antd-mobile';
import styles from './LoginScreenStyle.js';
class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			account: "",
			password: "",
		};
	}
	handleSubmit = () =>{
		if(this.state.account=='1' && this.state.password=="1"){
			this.props.navigation.navigate("Home");
		}else{
			alert('账号或密码错误请重新输入！');
		}
	}
	render(){
		return <View style={styles.contain}>
			<Text>登录</Text>
			<TextInput
				placeholder="Account"
				style={styles.input}
				value={this.state.account}
				onChangeText={(account)=>this.setState({account})}
			/>
			<TextInput
				placeholder="Pass word"
				style={styles.input}
				value={this.state.password}
				onChangeText={(password)=>this.setState({password})}
			/>
			<Button type="primary" onClick={this.handleSubmit} style={styles.loginButton}>登录</Button>
		</View>
	}
}
export default Login;