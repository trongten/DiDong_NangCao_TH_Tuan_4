import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView,Text, View,Image,TouchableOpacity } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Phone({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white',alignItems:'center'}}>

        <View style={{flex:1,width:'90%',backgroundColor:'white'}}>


            <Image source={require('../assets/xanh.png')} style={{width:350,height:480}}/>
            
            <View >
                <Text style={{fontSize:18,marginBottom:10}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={{flexDirection:'row',marginBottom:10,justifyContent:'flex-start',alignItems:'center'}}>
                    <Rating imageSize={30}/>
                    <Text style={{marginLeft:40,fontSize:'14'}}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,justifyContent:'flex-start',alignItems:'center'}}>
                   <Text style={{fontSize:20,fontWeight:'bold',marginRight:80}}>1.790.000 đ</Text>
                   <Text style={{color:'gray',textDecorationLine:'line-through'}}>1.790.000 đ</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,justifyContent:'flex-start',alignItems:'center'}}>
                   <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN  </Text>
                   <Text style={{width:18,borderColor:'black',borderStyle:'solid',borderWidth:1,borderRadius:10}}> ?</Text>
                </View>

                <View style={{flexDirection:'row',width:"100%"}}>
                   <TouchableOpacity onPress={()=> navigation.navigate('Picker')} style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',width:'100%',height:30,borderColor:'black', borderStyle:'solid', borderWidth:1,borderRadius:7}}>
                    <Text>4 MÀU-CHỌN MÀU</Text>
                      <Text style={{marginLeft:90,fontSize:20}}> {">"} </Text>
                   </TouchableOpacity>
                </View>
                
        </View> 

        <View style={{flex:1,justifyContent:'flex-end'}}>
                <TouchableOpacity style={{height:50,backgroundColor:'red',borderRadius:15,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>CHỌN MUA</Text>
                </TouchableOpacity>
        </View>


        </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

