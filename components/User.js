import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { userStyles } from '../styles/user';
import { Icon } from 'react-native-elements/dist/';

export default function User({navigation,route}) {
	
	const onPress=()=>{
		navigation.goBack()
	}

	return (
		<View style={globalStyles.container}>
			<TouchableOpacity  style={[globalStyles.button,userStyles.button]} onPress={onPress}>
				<Text > <Icon style={userStyles.icon} name='arrow-back' size={20} color='white' /> <Text style={globalStyles.buttonText}>Back</Text> </Text>
			</TouchableOpacity>
			<Text style={globalStyles.title}>Hello, {route.params.name}</Text>
		</View>
);
}

