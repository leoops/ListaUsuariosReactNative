import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';

import UserItem from './UserItem';

const ListaItens = props => {
	const { userList, onPressItem} = props
	return(
		<FlatList
			data={ userList }
			renderItem={ ({ item }) =>(
				<UserItem 
					user={ item }  
					navigateTo={ onPressItem } />
			)}
			keyExtractor={ item => String(item.id) } />
	);
};

export default ListaItens;