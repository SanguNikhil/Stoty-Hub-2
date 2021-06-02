import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from '../config';

export default class WriteStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            story:''
        }
    }

    submitStory =()=>{
        db.collection(stories).add({
            title: this.state.title,
            author: this.state.author,
            story: this.state.story
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title:'',
            author:'',
            story:'' 
        })
        ToastAndroid.show('STORY SUBMITTED',ToastAndroid.SHORT);
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={{textAlign:'center', fontSize:30, backgroundColor:'pink'}}>Story Hub</Text>
                </View>
                <View style={styles.inputView}>
                    <KeyboardAvoidingView>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Title"/>
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.inputView}>
                    <KeyboardAvoidingView>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Author"/>
                    </KeyboardAvoidingView>
                </View>
                    <KeyboardAvoidingView>
                        <TextInput
                            style={styles.storyBox}
                            placeholder="Write your story"/>
                    </KeyboardAvoidingView>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink',
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    scanButton:{
        backgroundColor: '#2196F3',
        padding:10,
        margin:10,
    },
    buttonText:{
        fontSize:15,
        textAlign: 'center',
        marginTop:10,
    },
    inputView:{
        flexDirection:'row',
        margin:20,
    },
    inputBox:{
        width:200,
        height:20,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor: 'white',
    },
    storyBox:{
        width:200,
        height:200,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor: 'white',
    },
    scanButton:{
        backgroundColor:'#66BB6A',
        width:50,
        borderWidth:1.5,
        borderLeftWidth:0,
    },
    submitButton:{
        backgroundColor: '#FBC02D',
        width:200,
        height:50,
    },
    submitButtonText:{
        padding:10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
});