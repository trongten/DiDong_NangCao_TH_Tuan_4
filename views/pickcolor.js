import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView,Text, View,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Picker() {
    const [color,setColor]= useState(require('../assets/xanh.png'))
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
        
        <View style={{flex:1,flexDirection:'row',height:200,width:'100%',justifyContent:'space-around'}}>
            <Image source={color} style={{width:150,height:170,resizeMode:'stretch'}}/>
            <View style={{alignItems:'flex-start',width:'50%',marginTop:10}}>
                <Text style={{fontSize:17}}>Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng</Text>
            </View>
            <View></View>
        </View>

        <View style={{width:'100%',height:'70%',backgroundColor:'gray'}}>

            <View><Text style={{fontSize:17}}>Chọn một màu bên dưới:</Text></View>

            <View style={{width:'100%',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{setColor(require('../assets/bac.png'))}} style={{width:80,height:80,backgroundColor:'#00FFFF',marginTop:10}}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setColor(require('../assets/do.png'))}} style={{width:80,height:80,backgroundColor:'red',marginTop:10}}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setColor(require('../assets/den.png'))}} style={{width:80,height:80,backgroundColor:'black',marginTop:10}}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setColor(require('../assets/xanh.png'))}} style={{width:80,height:80,backgroundColor:'blue',marginTop:10}}></TouchableOpacity>
            </View>

            <View style={{flex:1,justifyContent:'flex-end', alignItems:'center'}}>
                <TouchableOpacity  style={{height:50,width:'98%',backgroundColor:'#000FFF',borderRadius:15,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
            
           
        </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

