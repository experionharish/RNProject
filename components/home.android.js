import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableNativeFeedback,
    Button,
    ListView
} from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            loginFlag: true,
            dataSource: ds.cloneWithRows([
                {fName:'Harish', lName: 'Jose'},
                {fName:'Arjun', lName: 'Sreedhar'}
                
            ])
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Home
                </Text>
                <Text style={styles.logout} onPress={Actions.pop}>
                    Logout
                </Text>
                <ListView
                    style={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={styles.listItem}>{rowData.fName} {rowData.lName}</Text>}/>

            </View>
        );
    }

    logout() {}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003366'
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
        padding: 10,
        backgroundColor: '#0066b2',
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    logout: {
        backgroundColor: '#0066b2',
        color: 'white',
        padding: 10,
        borderRadius: 5
    },
    list: {
        margin: 20,
        padding:10,
        backgroundColor: '#aaa'
    },
    listItem: {
        fontSize: 18,
        color: 'white'
    }

});
