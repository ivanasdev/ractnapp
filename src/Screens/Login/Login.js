import React,{useState} from "react";

import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
  } from 'react-native';
  import NavigationStrings from "../../Components/NavigationStrings";
  import styles from "../../Styles";
  import { LinearGradient } from "expo-linear-gradient";

  import axios from "axios";

  import imagePath from "../../Components/imagePath";
  import { stringMd5 } from 'react-native-quick-md5';

  const LoginPage=({navigation})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [seePassword, setSeePassword] = useState(true);
    const [checkEmail, setCheckEmail] = useState(false);
  
    const goToScreenProfile = (username,ap,am,id_User,flagregistro,flagbenefit,flagPP) => {
      navigation.navigate(NavigationStrings.PROFILE, {username:username,ap:ap,am:am,id_User:id_User,flagregistro:flagregistro,flagbenefit:flagbenefit,flagPP:flagPP});
    };
    const ToastShow = () => {
      ToastAndroid.showWithGravityAndOffset(
        'Inicio Exitoso!!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        50,
        50,
      );
    };
    const ToastShowFail = () => {
      ToastAndroid.showWithGravityAndOffset(
        'Clave de acceso o email incorrectos ',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        50,
        50,
      );
    };
    const handleCheckEmail = text => {
      let re = /\S+@\S+\.\S+/;
      let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      setEmail(text);
      if (re.test(text) || regex.test(text)) {
        setCheckEmail(false);
      } else {
        setCheckEmail(true);
      }
    };
    const checkPasswordValidity = value => {
      const isNonWhiteSpace = /^\S*$/;
      if (!isNonWhiteSpace.test(value)) {
        return 'Password must not contain Whitespaces.';
      }
      const isContainsUppercase = /^(?=.*[A-Z]).*$/;
      if (!isContainsUppercase.test(value)) {
        return 'Password must have at least one Uppercase Character.';
      }
  
      const isContainsLowercase = /^(?=.*[a-z]).*$/;
      if (!isContainsLowercase.test(value)) {
        return 'Password must have at least one Lowercase Character.';
      }
  
      const isContainsNumber = /^(?=.*[0-9]).*$/;
      if (!isContainsNumber.test(value)) {
        return 'Password must contain at least one Digit.';
      }
  
      const isValidLength = /^.{8,16}$/;
      if (!isValidLength.test(value)) {
        return 'Password must be 8-16 Characters Long.';
      }
  
      return null;
    };
    const handleLogin = () => {
      const checkPassword = checkPasswordValidity(password);
  
      if (!checkPassword) {
        //console.log(email, password);
        //GetUser()
        const contrasena = stringMd5(password);
        axios
          .post('http://45.80.153.150:5001/loginusers', {
            email,
            contrasena,
          })
          .then(response => {
            //console.log(response)
            //.log(email, password);
            //console.log(response.data.length);
            if (response.data.length == 0) {
              console.log('Error de user');
              ToastShowFail();
            } else {
            
              response.data.map(item=>{
  
                const username=item.st_Nombre;
                const ap=item.st_Ap;
                const am=item.st_Am;
                const id_User=item.id_AppUser;  
                const flagregistro=item.id_CompleteRegister  
                const flagbenefit=item.id_BeneficiarieRegister
                const flagPP=item.st_PersonaPolitica
                goToScreenProfile(username,ap,am,id_User,flagregistro,flagbenefit,flagPP);
              })
              console.log('Usuario logeado');
              ToastShow();
     
            }
          });
      } else {
        alert(checkPassword);
      }
    };
    return(
        <LinearGradient
        colors={['#0D5C75', '#199FB1', '#04323A']}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.imgintro}
              source={require('../../../assets/inmo.png')}
            />
  
            <LinearGradient
              colors={['#04323A', '#199FB1', '#fff']}
              style={styles.linearGradientcardlogin}>
              <Text style={styles.txtlog}>Iniciar sesi&oacute;n</Text>
              <View>
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Email"
                  value={email}
                  onChangeText={text => handleCheckEmail(text)}
                />
              </View>
              {checkEmail ? (
                <Text  >
              
                  <Image
                    style={styles.logocheckw}
                    source={require('../../../assets/icons/cancelar.png')}
                  />
                  Email invalido
                </Text>
              ) : (
                <Image
                  style={styles.logocheck}
                  source={require('../../../assets/icons/comprobado.png')}
                />
              )}
  
              <View>
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Password"
                  autoCapitalize="none"
                  value={password}
                  secureTextEntry={seePassword}
                  onChangeText={text => setPassword(text)}
                />
  
                <TouchableOpacity
                  style={styles.wrapperIcon}
                  onPress={() => setSeePassword(!seePassword)}>
                  <Image
                    source={seePassword ? imagePath.icEyeOff : imagePath.icEye}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
  
              {email == '' || password == '' || checkEmail == true ? (
                <TouchableOpacity
                  disabled
                  style={styles.buttonDisable}
                  onPress={handleLogin}>
                  <Text style={styles.txtlogsubmit}>Acceder</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.buttonAccess} onPress={handleLogin}>
                  <Text style={styles.txtlogsubmit}>Acceder</Text>
                </TouchableOpacity>
              )}
  
              <View>
                <TouchableOpacity>
                  <Text style={styles.txtforgot}>Olvidaste tu clave?</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </LinearGradient>

    )
  }

  export default LoginPage