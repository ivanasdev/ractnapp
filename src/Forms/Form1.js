import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  ToastAndroid,
} from "react-native";

import axios from "axios";
import styles from "../Styles";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";
const Form1 = (props) => {
  const navigation = useNavigation();
  Id_User = props.Id_User;
  console.log("ID PROPS" + Id_User);

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

  console.log("ID" + Id_User);

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

  const [sliderValue, setSliderValue] = useState(100);
  const porcentaje = sliderValue;

  const SubmitForm = () => {
    console.log(
      "Datos" + Id_User,
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
      cpostal
    );
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
      !cpostal
    ) {
      ToastShowFail();
    } else {
      axios
        .post(`${URI}/addbeneficiaries`, {
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
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcomeprofiletxt}>Beneficiario &Uacute;nico</Text>

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
          placeholder="Apellido materno"
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
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#FF8B00"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />

        <Text >{sliderValue} %</Text>

        <Text style={styles.txtlog}>Telefonos</Text>

        <TextInput
          style={styles.input}
          placeholder="Telefono Fijo"
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

        <Pressable onPress={SubmitForm} style={styles.button}>
          <Text style={styles.txtlogsubmit}>Guardar Datos</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Form1;
