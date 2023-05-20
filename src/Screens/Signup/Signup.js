import React, {useState} from "react";

import { LinearGradient } from "expo-linear-gradient";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    ToastAndroid,
  } from 'react-native';

  import NavigationStrings from "../../Components/NavigationStrings";
  import axios from "axios";
  import imagePath from "../../Components/imagePath";
  import styles from "../../Styles";
  import SelectDropdown from "react-native-select-dropdown";
  import { stringMd5 } from 'react-native-quick-md5';
  const SignupPage=({navigation})=>{

    const URI="http://45.80.153.150:5001"
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [ap,setAp]=useState("");
    const [am,setAm]=useState("");
  
    const [password, setPassword] = useState('');
    const [seePassword, setSeePassword] = useState(true);
    const [checkEmail, setCheckEmail] = useState(false);
    const [politic,setPolitic]=useState("")
    
    




   const soy=["SI","NO"];


 

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
        return 'La clave de acceso no debe tener espacios en blanco.';
      }
      const isContainsUppercase = /^(?=.*[A-Z]).*$/;
      if (!isContainsUppercase.test(value)) {
        return 'La clave de acceso debe tener al menos una mayuscula.';
      }
  
      const isContainsLowercase = /^(?=.*[a-z]).*$/;
      if (!isContainsLowercase.test(value)) {
        return 'La clave de acceso debe tener al menos una minuscula .';
      }
  
      const isContainsNumber = /^(?=.*[0-9]).*$/;
      if (!isContainsNumber.test(value)) {
        return 'La clave de acceso debe tener un digito por lo menos .';
      }
  
      const isValidLength = /^.{6,16}$/;
      if (!isValidLength.test(value)) {
        return 'La clave de acceso debe tener de 6 a 10 caracteres.';
      }
  
      return null;
    };
  
    const gotoLogin = () => {
      navigation.navigate(NavigationStrings.LOGIN, {title: 'Inicia Sesion'});
    };
  
    const HandleSignupTmp = () => {

      const checkPassword = checkPasswordValidity(password);
      if (!checkPassword) {
        //goToScreenProfile()
       
        const flagregistro=0
        const flagBenefit=0  

        const contrasena = stringMd5(password);

   
        console.log(nombre,ap,am, email,contrasena,flagregistro,flagBenefit,politic);
        axios
          .post(`${URI}/registrotmp`, {
            nombre,
            ap,
            am,
            email,
            contrasena,
            flagregistro,
            flagBenefit,
            politic
           
          })
          .then(response => {
            console.log(response.data);
  
            //console.log(email, password);
            //console.log(response.data.length);
            if (response.data.length == 0) {
              console.log('Error al registrar');
              ToastShowFail();
            } else {
              console.log('Usuario Registrado');
              console.log(response);
              ToastShow();
              gotoLogin();
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
              style={styles.linearGradientcardSignup}>
              <Text style={styles.txtlog}>Registrarse</Text>
  
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre"
                  value={nombre}
                  name="nombre"
                  onChangeText={text => setNombre(text)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Apellido Paterno"
                  value={ap}
                  name="ap"
                  onChangeText={text => setAp(text)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Apellido Materno"
                  value={am}
                  name="am"
                  onChangeText={text => setAm(text)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Correo electronico"
                  value={email}
                  onChangeText={text => handleCheckEmail(text)}
                />
              </View>

              
              {checkEmail ? (<Text style={styles.Wrongemail}>
                  <Image
                    style={styles.logocheckw}
                    source={require('../../../assets/icons/cancelar.png')} />Email incorrecto</Text>) 
                    :
                     ( <Image
                    style={styles.logocheck}
                    source={require('../../../assets/icons/comprobado.png')}
                  />)
                }
                
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
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

              <View>
                
                <SelectDropdown
                  dropdownStyle={styles.dropdown1DropdownStyleben}
                  buttonStyle={styles.dropdown1BtnStyleben}
                  data={soy}
                  defaultButtonText={"Persona Politicamente expuesta"}
                  onSelect={(selectedItem) => {
                    console.log(selectedItem);
                    setPolitic(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
                </View>
       
  
              {email == '' || password == '' || checkEmail == true ? (
                <TouchableOpacity
                  disabled
                  style={styles.buttonDisable}
                  onPress={HandleSignupTmp}>
                  <Text style={styles.txtlogsubmit}>Registrarse</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={HandleSignupTmp}>
                  <Text style={styles.txtlogsubmit}>Registrarse</Text>
                </TouchableOpacity>
              )}
            </LinearGradient>
          </View>
        </ScrollView>
      </LinearGradient>

    )
  }

  export default SignupPage