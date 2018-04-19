import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
	Button,
	Toast,
	Modal,
	WhiteSpace,
	WingBlank,
	Toast 
} from 'antd-mobile';
class MeassageModal extends Component{
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
			<View style={styles.catain}></View>
		</View>
	}
}
const styles = StyleSheet.create({
  contain: {
    width: '100%',
    height: '100%',
    background: 'rgba(55, 55, 55, 0.6)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  catain: {
    width:200;
	height:290;
	background: 'white';
	textAlign: 'center';
	position: 'absolute';
    top: '50%';
    left: '50%';
    marginLeft: '-100';
    marginTop: '-145';
  },
  images:{
  	width:40,
  	height:40
  },
  listContain:{
  	flexDirection: 'row',
  	backgroundColor:'white',
  	marginBottom:20
  	/*justifyContent: 'space-between',*/
  },
  listitem:{
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	borderColor: '#ddd', 
	borderBottomWidth: 0.3,
	paddingBottom:10,
  }
});
export default MeassageModal;