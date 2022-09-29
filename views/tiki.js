import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView,Text, View,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Tiki({navigation}) {
  return (
    <SafeAreaView style={{flex: 1,justifyContent:'center'}}>

      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

          <Image style={{height:180,width:130}} source={require('../assets/book.png')}/>

              <View style={{}}>    
                  <Text style={{fontWeight:'bold',marginBottom:10}}>Nguyên hàm tích phân và ứng dụng</Text>
                  <Text style={{fontWeight:'bold',marginBottom:20}}>Cung cấp bởi Tiki Trading</Text>
                  <Text style={{fontWeight:'bold', fontSize:25, color:'red',marginBottom:20}}>141.800 đ</Text>
                  <Text style={{fontWeight:'bold',marginBottom:10,color:'gray',textDecorationLine:'line-through'}}>141.800 đ</Text>

                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                      <TouchableOpacity style={{  height:30,
                      backgroundColor:"#A9A9A9",
                      padding: 10}}>
                        <Text style={{fontWeight:'bold',fontSize:10}}>+</Text>
                      </TouchableOpacity>

                      <Text style={{fontSize:20}}> 1 </Text>

                      <TouchableOpacity style={{  height:30,
                       backgroundColor: "#A9A9A9",
                        padding: 10}}>
                       <Text style={{fontWeight:'bold',fontSize:10}}>-</Text>
                      </TouchableOpacity>
                    </View>

                    <Text style={{padding:5,fontWeight:'bold',color:'blue'}}>Mua sau</Text>
                  </View>

              </View>

      </View>

      <View style={{flexDirection:'row',justifyContent:'space-evenly',height:70,marginTop:20}}>
        <TouchableOpacity style={{  height:60,width:220,flexDirection:'row',
                      borderColor:'black',borderStyle:'solid',borderWidth:1,borderRadius:2,justifyContent:'center',alignItems:'center',
                      padding: 10}}><View style={{width:40,height:20, marginRight:5,backgroundColor:'yellow'}}></View><Text>Mã Giảm Giá</Text></TouchableOpacity>
        <TouchableOpacity style={{  height:60,
                      backgroundColor:"blue",
                      padding: 10}}><Text style={{color:'white',fontWeight:'bold',fontSize:25}}>Áp dụng</Text></TouchableOpacity>
      </View>

      <View style={{backgroundColor:'#A9A9A9',height:20}}>

      </View>

      <View style={{flexDirection:'row',height:70,justifyContent:'space-evenly',alignItems:'center'}}>
        <Text style={{fontWeight:'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox ? </Text>
        <Text style={{color:'blue',fontWeight:'bold'}}>Nhập tại đây?</Text>
      </View>

      <View style={{backgroundColor:'#A9A9A9',height:20}}>

      </View>

      <View style={{flexDirection:'row', justifyContent:'space-around',height:60}}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>Tạm tính</Text>
        <Text style={{fontWeight:'bold', fontSize:25, color:'red'}}>141.800đ</Text>
      </View>

      <View style={{backgroundColor:'#A9A9A9',height:100}}>

      </View>

      <View style={{alignItems:'center',justifyContent:'space-around',height:120,width:400}}>
        <View style={{width:400,flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:23,fontWeight:'bold',color:'gray'}}>Thành tiền</Text>
          <Text style={{fontWeight:'bold', fontSize:25, color:'red'}}>141.800đ</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Phone')}} style={{backgroundColor:'red',height:50,alignItems:'center',justifyContent:'center',width:370}}><Text style={{color:'white',fontSize:25}}>Tiến hành đặt hàng</Text></TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

