import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	View,
	TouchableOpacity,
    Text
} from 'react-native';

const UserItem = props => {
	const { user, navigateTo} = props;
	return(	
		<TouchableOpacity onPress={() => { 
			navigateTo({ user }) 
		}}>
			<View  style={ style.cardItem}>
				<View>
					<Image source={{uri: 'https://picsum.photos/200/300'}} style={{ width: 100, height: 100 }}/>
				</View>
				<View style={ style.textDetail} >
					<Text style={ style.textName } >{props.user.name}</Text>
					<Text style={ style.userDetail } >{props.user.username}</Text>
					<Text style={ style.userDetail } >{props.user.email}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	cardItem: {
		margin: 10,
		padding: 10,
		backgroundColor: '#7fffd4',
		flexDirection: 'row',
		borderRadius: 5,
		
	},
	imagem: {
		borderRadius: 10,
	},
	textDetail: {
		marginLeft: 10
	},
	textName: {
		fontSize: 20,
		color: '#00bfff',
	},
	userDetail: {
		color: '#ff4500'
	}
});

export default UserItem;