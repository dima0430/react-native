import React,{useState} from 'react';
import { Text, View, TextInput,TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import { loginStyles } from '../styles/login';

const users = [
	{name:'ivan',password:'ivan123'},
	{name:'valera',password:'valera123'},
	{name:'dima',password:'dima123'}
]

export default function Login({navigation}) {

	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [empty, setEmpty] = useState(false)
	const [error, setError] = useState(false)

	const handleSubmit=()=>{
		const user=users.find(item=>item.name===name && item.password===password)
		if(!password || !name){
			setEmpty(true)
			setError(true)
		}
		else if(!user){
			setEmpty(false)
			setError(true)
		}
		else{
			setEmpty(false)
			setError(false)
			setPassword('')
			setName('')
			navigation.navigate('User',{name})
		}
	}
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.title}>Login</Text>
			<TextInput style={loginStyles.input} value={name} placeholder='Name' onChangeText={setName}/>
			<TextInput style={loginStyles.input} value ={password}placeholder='Password'onChangeText={setPassword} secureTextEntry={true}/>
			<Text style={[loginStyles.errorTransparent,error && loginStyles.errorRed]}>{empty?'Please,enter all fields!':'Incorrect data!'}</Text>
			<TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
				<Text style={globalStyles.buttonText}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
}
