import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
  ToastAndroid,

} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import styles from "../Styles";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

const Form2 = (props) => {

  const navigation = useNavigation();
  const ToastShowFail = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Clave de acceso o email incorrectos ",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50
    );
  };

  const ToastShow = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Registro Exitoso!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50
    );
  };
  const URI = "http://45.80.153.150:5001";

  Id_User = props.Id_User;
  console.log("ID PROPSFROM@"+Id_User)

  
  const [nombreb, setNombreb] = useState("");
  const [apb, setApb] = useState("");
  const [amb, setAmb] = useState("");
  const [parent, setParent] = useState("");
  const [telfijo, setTelfijo] = useState("");
  const [telTrabajo, setTelTrabajo] = useState("");
  const [celularb, setCelularb] = useState("");
  const [calleb, setCalleb] = useState("");
  const [nint, setNint] = useState("");
  const [nextb, setNextb] = useState("");
  const [col, setCol] = useState("");
  const [alcaldia, setAlcaldia] = useState("");
  const [edo, setEdo] = useState("");
  const [cpostal, setCpostal] = useState("");

  
  const [nombreb2, setNombreb2] = useState("");
  const [apb2, setApb2] = useState("");
  const [amb2, setAmb2] = useState("");
  const [parent2, setParent2] = useState("");
  const [telfijo2, setTelfijo2] = useState("");
  const [telTrabajo2, setTelTrabajo2] = useState("");
  const [celularb2, setCelularb2] = useState("");
  const [calleb2, setCalleb2] = useState("");
  const [nint2, setNint2] = useState("");
  const [nextb2, setNextb2] = useState("");
  const [col2, setCol2] = useState("");
  const [alcaldia2, setAlcaldia2] = useState("");
  const [edo2, setEdo2] = useState("");
  const [cpostal2, setCpostal2] = useState("");


  const ptotal=100
  const [sliderValue, setSliderValue] = useState(0);
  const porcentaje=sliderValue;
  const resto=ptotal - sliderValue;  
  const porcentaje2=resto;



  console.log(sliderValue)
  console.log(resto)



const SubmitForm=()=>{


   if (
    !nombreb ||
    !apb ||
    !amb ||
    !parent ||
    !porcentaje ||
    !telfijo ||
    !celularb ||
    !calleb ||
    !nint ||
    !nextb ||
    !col ||
    !alcaldia ||
    !edo ||
    !cpostal ||
    !nombreb2 ||
    !apb2 ||
    !amb2 ||
    !parent2 ||
    !porcentaje2 ||
    !telfijo2 ||
    !celularb2 ||
    !calleb2 ||
    !nint2 ||
    !nextb2 ||
    !col2 ||
    !alcaldia2 ||
    !edo2 ||
    !cpostal2
  )
  {
    ToastShowFail();
  }
  else {
    axios
    .post(`${URI}/addbeneficiaries2`, {
      Id_User,
      nombreb,
      apb,
      amb,
      parent,
      porcentaje,
      telfijo,
      telTrabajo,
      celularb,
      calleb,
      nint,
      nextb,
      col,
      alcaldia,
      edo,
      cpostal,
      nombreb2,
      apb2,
      amb2,
      parent2,
      porcentaje2,
      telfijo2,
      telTrabajo2,
      celularb2,
      calleb2,
      nint2,
      nextb2,
      col2,
      alcaldia2,
      edo2,
      cpostal2
    })
    .then((response) => {
      console.log(response);
  
      console.log(response.data.length);
      if (response.data.length == 0) {
        console.log("Error al registrar");
        ToastShowFail();
      } else {
  
        console.log("Registro completo");
        ToastShow();
        navigation.goBack();
      }
    });
   
   


  }


}


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcomeprofiletxt}>Primer Beneficiario</Text>

        <TextInput
         style={styles.input}
          placeholder="Nombre"
          value={nombreb}
          name="nombreb"
          onChangeText={(text) => setNombreb(text)}
    
          
          />
        <TextInput
         style={styles.input}
          placeholder="Apellido paterno"
          value={apb}
          name="apb"
          onChangeText={(text) => setApb(text)}
          />
        <TextInput 
        style={styles.input}
         placeholder="Apellido materno " 
         value={amb}
         name="amb"
         onChangeText={(text) => setAmb(text)}
         
         />
        <TextInput 
        style={styles.input}
         placeholder="Parentesco"
         value={parent}
         name="parent"
         onChangeText={(text) => setParent(text)}
       
         />

        <Text style={styles.txtlog}>Procentaje</Text>
        <Slider
          maximumValue={ptotal}
          minimumValue={0}
          minimumTrackTintColor="#FF0097"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />

        <Text
         style={styles.txtporcentaje}
         >{sliderValue} %</Text>

        <Text style={styles.txtlog}>Telefonos</Text>

        <TextInput style={styles.input}
         placeholder="Telefono Fijo " 
         value={telfijo}
         name="telfijo"
         onChangeText={(text) => setTelfijo(text)}
  
         
         />
         <TextInput
          style={styles.input}
          placeholder="Trabajo"
          value={telTrabajo}
          name="telTrabajo"
          onChangeText={(text) => setTelTrabajo(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Celular"
          value={celularb}
          name="celularb"
          onChangeText={(text) => setCelularb(text)}
        />

        <Text style={styles.txtlog}>Domicilio</Text>

        <TextInput
          style={styles.input}
          placeholder="Calle"
          value={calleb}
          name="calleb"
          onChangeText={(text) => setCalleb(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="N&uacute;mero interior"
          value={nint}
          name="nint"
          onChangeText={(text) => setNint(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="N&uacute;mero exterior"
          value={nextb}
          name="nextb"
          onChangeText={(text) => setNextb(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Colonia"
          value={col}
          name="col"
          onChangeText={(text) => setCol(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Alcaldia &oacute; municipio"
          value={alcaldia}
          name="alcaldia"
          onChangeText={(text) => setAlcaldia(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          value={edo}
          name="edo"
          onChangeText={(text) => setEdo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="C&oacute;digo postal"
          value={cpostal}
          name="cpostal"
          onChangeText={(text) => setCpostal(text)}
        />


        <Text style={styles.welcomeprofiletxt}>Segundo Beneficiario</Text>

        <TextInput
         style={styles.input}
          placeholder="Nombre"
          value={nombreb2}
          name="nombreb2"
          onChangeText={(text) => setNombreb2(text)}
    
          
          />
        <TextInput
         style={styles.input}
          placeholder="Apellido paterno"
          value={apb2}
          name="apb2"
          onChangeText={(text) => setApb2(text)}
          />
        <TextInput 
        style={styles.input}
         placeholder="Apellido materno " 
         value={amb2}
         name="amb2"
         onChangeText={(text) => setAmb2(text)}
         
         />
        <TextInput 
        style={styles.input}
         placeholder="Parentesco"
         value={parent2}
         name="parent2"
         onChangeText={(text) => setParent2(text)}
       
         />

        <Text style={styles.txtlog}>Procentaje asignado:</Text>
      

        <Text style={styles.txtporcentaje}>{resto}%</Text>

        <Text style={styles.txtlog}>Telefonos</Text>

        <TextInput
          style={styles.input}
          placeholder="Telefono Fijo"
          value={telfijo2}
          name="telfijo2"
          onChangeText={(text) => setTelfijo2(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Trabajo"
          value={telTrabajo2}
          name="telTrabajo2"
          onChangeText={(text) => setTelTrabajo2(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Celular"
          value={celularb2}
          name="celularb2"
          onChangeText={(text) => setCelularb2(text)}
        />

        <Text style={styles.txtlog}>Domicilio</Text>

        <TextInput
          style={styles.input}
          placeholder="Calle"
          value={calleb2}
          name="calleb2"
          onChangeText={(text) => setCalleb2(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="N&uacute;mero interior"
          value={nint2}
          name="nint2"
          onChangeText={(text) => setNint2(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="N&uacute;mero exterior"
          value={nextb2}
          name="nextb2"
          onChangeText={(text) => setNextb2(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Colonia"
          value={col2}
          name="col2"
          onChangeText={(text) => setCol2(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Alcaldia &oacute; municipio"
          value={alcaldia2}
          name="alcaldia2"
          onChangeText={(text) => setAlcaldia2(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          value={edo2}
          name="edo2"
          onChangeText={(text) => setEdo2(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="C&oacute;digo postal"
          value={cpostal2}
          name="cpostal2"
          onChangeText={(text) => setCpostal2(text)}
        />

        <Pressable onPress={SubmitForm} style={styles.button}>
          <Text style={styles.txtlogsubmit}>Guardar Datos</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Form2;
