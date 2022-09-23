import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>



      <View style={{flex:1,flexDirection:'row'}}>

          <Image source={require('./assets/book.png')}/>

              <View style={{}}>
                  <Text>Nguyên hàm tích phân và ứng dụng</Text>
                  <Text>Cung cấp bởi Tiki Trading</Text>
                  <Text>141.800 đ</Text>
                  <Text>141.800 đ</Text>

                  <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{flexDirection:'row'}}>
                      <TouchableOpacity>-</TouchableOpacity>
                      <Text>1</Text>
                      <TouchableOpacity>+</TouchableOpacity>
                    </View>

                    <Text>Mua sau</Text>
                  </View>

              </View>

      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>Mã Giảm Giá</TouchableOpacity>
        <TouchableOpacity>Áp dụng</TouchableOpacity>
      </View>

      <View>

      </View>

      <View style={{flexDirection:'row'}}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text>Nhập tại đây?</Text>
      </View>

      <View>

      </View>

      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <Text>Tạm tính</Text>
        <Text>141.800đ</Text>
      </View>

      <View>

      </View>

      <View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <Text>Thành tiền</Text>
          <Text>141.800đ</Text>
        </View>
        <TouchableOpacity>Tiến hành đặt hàng</TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
