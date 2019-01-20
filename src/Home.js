import React, {Component} from 'react';
import { TouchableOpacity, Text, Button, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TextInput } from "react-native";
import { widthPercentageToDP as wp} from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AntiClippyHalf from './AntiClippyHalf';
import * as Animatable from 'react-native-animatable';

const goToGitInit = () => {
   Actions.gitInit()
}

export default class InputBox extends Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }
  
render(){
   return (
    
      <View style={styles.container}>
      <View style={styles.textBox1}>
      <View style={styles.circle}>
      <Animatable.View animation="fadeInDown"><AntiClippyHalf style={styles.AntiClippyHalf}/></Animatable.View>
      <Animatable.Text animation="rubberBand"><Text style={styles.title}>GitGoing</Text></Animatable.Text>
      </View>
      </View> 
      <TouchableOpacity style = {{ marginTop: hp('35%') }}> 
    
         <Button 
         onPress = {goToGitInit}
         title= "GitGoing to Git Init"
         color='#FF6D70'
         />  
      </TouchableOpacity>
      <Text style={styles.p}>Would you like to learn more?</Text>
      </View>
     
   )
}
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#4A4843',
      alignItems: "center",      
    },
    
   title: {
      color: '#FF6D70',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: 0,
    marginBottom: hp('1%'),
   },
   //white circle
  circle: {
   backgroundColor: '#fff',
   width: wp('90%'),
   height: hp('50%'),
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: wp('100%'),
   borderColor: '#4A4843',
   borderWidth: 25,
   marginTop: hp('25%'),
   
 },
 //brown box
 textBox1: {
   backgroundColor: '#A79B82',
   width: wp('100%'),
   height: hp('40%'),
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: hp("2%"),
 },

//logo
 AntiClippyHalf: {
   flex: 1,
   width: wp('20%'),
   height: hp('20%'),
   
 },

 //username
 textInput1: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: wp('50%'),
   height: hp('5%'),
   marginTop: wp('5%'),
   alignItems: 'center',   
   
 },

 //password
 textInput: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: wp('50%'),
   height: hp('5%'),
   marginTop: hp('1%'),
   marginBottom: hp('1%'),
   alignItems: 'center',
 },

 p:{
    color: 'white',
 },


 });
