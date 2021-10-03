import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:40
    },
    button:{
        borderRadius:20,
        paddingVertical:20,
        backgroundColor:'#00BFFF',
        width: 120,
        alignItems:'center',
    },
    buttonText:{
        fontSize:20,
        alignItems: 'center',
        justifyContent: 'center',
        color:'white'   
    }
})