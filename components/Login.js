import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import TireMainImage from '../asset/TireMain.png';
import ButtonUI from './ButtonUI';
const Login = () => {
  const [loginId, setLoginId] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const AlertFunc = text => {
    alert(text);
  };
  const TryLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/login', {
        // 프로토콜 (http://) 추가
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'user1@gmail.com',
          password: '1asd234',
        }),
      });

      if (response.status === 200) {
        AlertFunc(response.ok);
        console.log(response);
      } else {
        AlertFunc('error');
      }
    } catch (error) {
      console.error(error);
      AlertFunc('네트워크 요청 실패');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={TireMainImage} style={styles.image} />
      <TextInput
        style={styles.inputBox}
        placeholder="아이디:"
        onChangeText={val => setLoginId(val)}></TextInput>
      <TextInput
        style={styles.inputBox}
        placeholder="비밀번호:"
        onChangeText={val => setLoginPassword(val)}></TextInput>
      <View style={styles.buttonContainer}>
        <ButtonUI
          text={'로그인'}
          textSize={15}
          textColor={'white'}
          width={100}
          backColor={'#3498db'}
          func={TryLogin}
          left={20}
          right={20}
        />
        <ButtonUI
          text={'회원가입'}
          textSize={15}
          textColor={'grey'}
          width={100}
          func={AlertFunc}
          left={20}
          right={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 250,
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    margin: 50,
    alignSelf: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    width: 200,
    marginLeft: 30,
    marginRight: 30,
  },
});
export default Login;
