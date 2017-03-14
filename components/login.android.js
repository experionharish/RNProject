
import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableNativeFeedback,
    Button
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginFlag : false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    LOGIN
                </Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.inputBox}
                    placeholder="Username"
                    onChangeText={(username) => this.setState({username})}/>
                <TextInput
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    style={styles.inputBox}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password})}/>

                <TouchableNativeFeedback
                    onPress={this.login.bind(this)}
                    background={TouchableNativeFeedback.SelectableBackground()}>

                    <Text style={styles.button}>Login</Text>

                </TouchableNativeFeedback>

            </View>
        );
    }

    login() {
       
        // this.setState({loginFlag : true});  alert(this.state.loginFlag);
       if(this.state.username=='harish.jose' && this.state.password=='password'){
          
         Actions.home();
       }
       else{
           alert("error");
       }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003366',
     
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        margin: 20,
        color: '#0066b2'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    inputBox: {
        width: 250,
        height: 40,
        borderWidth: .5,
        borderColor: '#ccc',
        fontSize: 18,
        backgroundColor: '#ccc',
        margin: 10
    },
    button: {
        margin: 10,
        width: 250,
        padding:10,
        backgroundColor: '#0066b2',
        textAlign:'center',
        color: 'white',
        fontSize: 20
    }

});
