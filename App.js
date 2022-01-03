import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';

const App =() => {
  
  const [randomColor,setRandomColor] = useState('white');

  const changeBackgroundcolor0 = () =>{ //màu ngẫu nhiên
    let color = 
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')';
    setRandomColor(color);
  };

  const changeBackgroundcolor1 =() =>{
    let color = 'blue';
    setRandomColor(color);
  }

  const changeBackgroundcolor2 =() =>{
    let color = 'yellow';
    setRandomColor(color);
  }
  const changeBackgroundcolor3 =() =>{
    let color = 'red';
    setRandomColor(color);
  }
  const changeBackgroundcolor4 =() =>{
    let color = 'white';
    setRandomColor(color);
  }

  return (
    <>
      <View style={[styles.container,{backgroundColor:randomColor}]}>
        <TouchableOpacity
        onPress={changeBackgroundcolor0}
        >
          <LinearGradient
          style={styles.buttonStyle0}
          colors={['violet','indigo','blue','green','yellow','orange','red','transparent']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          >
            <Text style={styles.buttonText0}>
              Random Color
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={[styles.container1,{backgroundColor:randomColor}]}>
          <TouchableOpacity
          style={styles.buttonStyle1}
          onPress={changeBackgroundcolor1}
          >
            <Text style={styles.buttonText1}>
              Blue 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.buttonStyle2}
          onPress={changeBackgroundcolor2}
          >
            <Text style={styles.buttonText2}>
              Yellow 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.buttonStyle3}
          onPress={changeBackgroundcolor3}
          >
            <Text style={styles.buttonText3}>
              Red 
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
        style={styles.buttonStyle4}
        onPress={changeBackgroundcolor4}
        >
          <Text style={styles.buttonText4}>
            CLEAR
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flexDirection:'row',                //flexDirection sắp vị trí các nút theo hàng ngang:row, cột dọc:column
    justifyContent: 'space-between',    //justifyContent sắp khoảng cách giữa các khung/nút
    alignItems: 'center',
  },
  buttonStyle0: {                       //alignItems là tùy chỉnh vị trí CỦA TẤT CẢ  khung/nút trong flex
    alignItems: 'center',               //alignSelf chỉnh vị trí của 1 khung/nút
    paddingHorizontal: 20,              //border thay đổi độ nhọn của góc khung/nút
    paddingVertical: 15,                ////margin là khoảng cách giữa các khung/nút; Top: kc trên, Bottom: kc dưới, Left: kc bên trái, Right: kc bên phải
    borderRadius: 17,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 6
  },
  buttonStyle1:{
    alignSelf: 'auto',
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 17,
    marginTop: 35,
    marginRight: 20,
    borderColor: 'cyan',
    borderWidth: 5
  },
  buttonStyle2:{
    alignSelf:'auto',
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 17,
    marginTop: 35,
    borderColor: 'orange',
    borderWidth: 5
  },
  buttonStyle3:{
    alignSelf:'auto',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 17,
    marginTop: 35,
    marginLeft: 20,
    borderColor: 'pink',
    borderWidth: 5
  },
  buttonStyle4:{
    alignSelf:'auto',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 17,
    marginTop: 25,
    borderColor: 'white',
    borderWidth: 5
  },
  buttonText0: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  buttonText1: {
    color: 'cyan',
    fontSize: 20,
    fontWeight: '700',
  },
  buttonText2: {
    color: 'orange',
    fontSize: 20,
    fontWeight: '700',
  },
  buttonText3: {
    color: 'pink',
    fontSize: 20,
    fontWeight: '700',
  },
  buttonText4: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default App;