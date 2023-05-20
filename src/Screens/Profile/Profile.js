import React, {useState,useEffect} from "react";

import {
    View,
    Text,
    Image,
    ScrollView,
    Pressable,
    TextInput,
  } from 'react-native';

  import styles from "../../Styles";
  import NavigationStrings from "../../Components/NavigationStrings";
  import { LinearGradient } from "expo-linear-gradient";
  import SelectDropdown from "react-native-select-dropdown";

  const ProfilePage=({navigation,route})=>{

      
    const [monto, setMonto] = useState('');
    const [plazo, setPlazo] = useState('');
    const [resultado, setResultado] = useState(0);
    const plazocat = ['12', '24', '36'];
  
    const calcular = () => {
      c1 = parseInt(monto);
      c2 = parseInt(plazo);
      const resultadoop = c1 * c2;
      setResultado(resultadoop);
    };
  
    const username = route.params.username;
    const ap = route.params.ap;
    const am = route.params.am;
    const id_User = route.params.id_User;
    const id_FlagR = route.params.flagregistro;
    const flagbenefit=route.params.flagbenefit;
    const flagPP=route.params.flagPP;
    console.log(flagPP)


 
const politcsform=()=>{
  goToPolitis(id_User);
}
     const goToPolitis=(id_User)=>{
      navigation.navigate(NavigationStrings.POLITICS,{id_User:id_User});

     }
    const goToCompleteSignup = (username, ap, am, id_User) => {
        navigation.navigate(NavigationStrings.COMPLETESIGNUP, {
          username: username,
          ap: ap,
          am: am,
          id_User: id_User,
        });
      };
       
      const terminarreg = () => {
    
        goToCompleteSignup(username, ap, am, id_User);
      }

    
        const gotobenfits = (username, id_User,flagbenefit) => {
          navigation.navigate(NavigationStrings.BENEFICIARIES,{
            username:username,
            id_User:id_User,
            flagbenefit:flagbenefit
          });
        }

        const finishBeneficiaries=()=>{
          gotobenfits(username,id_User,flagbenefit);
        }
    


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

          <Text style={styles.welcomeprofiletxt}>
            Bienvenido {username} {ap} {am}
          </Text>



          {id_FlagR == 1 ? (
               <Pressable onPress={finishBeneficiaries} style={styles.botininvestpro}>
               <Text style={styles.btn1txt}> Beneficiarios </Text>
             </Pressable>
          ) : (
            <Pressable onPress={terminarreg} style={styles.botininvestpro}>
              <Text style={styles.btn1txt}> Completa tu Registro </Text>
            </Pressable>
          )}


          {flagPP == "SI" ? (
                <Pressable onPress={politcsform} style={styles.botininvestpro}>
                <Text style={styles.btn1txt}> Registro de Persona politicamente expuesta </Text>
              </Pressable>

          )
          :
          (<Text></Text>)
          }

          <LinearGradient
            colors={['#199FB1', '#fff']}
            style={styles.linearGradientcardProfile}>
        
            <Text style={styles.welcomeprofiletxt1}>Simulador de ganacias</Text>

            <TextInput
              style={styles.inputprofile}
              placeholder="monto"
              value={monto}
              name="monto"
              onChangeText={text => setMonto(text)}
            />

            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              data={plazocat}
              defaultButtonText={'Selecciona un plazo'}
              onSelect={(selectedItem, index) => {
                //console.log(selectedItem, index);
                setPlazo(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />

            <Pressable style={styles.btnsim} onPress={calcular}>
              <Text style={styles.btn1txt}> Calcula tu inversi&oacute;n </Text>
            </Pressable>

            <Text style={styles.txtresultado}>
              Tu inversi&oacute;n: <Text style={styles.resultado}>${resultado}</Text>
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
    )
  }

  export default ProfilePage