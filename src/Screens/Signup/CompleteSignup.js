import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavigationStrings from "../../Components/NavigationStrings";
import styles from "../../Styles";
import axios from "axios";

import SelectDropdown from "react-native-select-dropdown";

const CompleteSignup = ({ navigation, route }) => {
  const goToScreenProfile = (username, apellidop, apellidom) => {
    navigation.navigate(NavigationStrings.PROFILE, {
      username: username,
      ap: apellidop,
      am: apellidom,
    });
  };
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
  const username = route.params.username;
  const apellidop = route.params.ap;
  const apellidom = route.params.am;
  const idUser = route.params.id_User;
  console.log(idUser);

  const URI = "http://45.80.153.150:5001";

  const [day, setDay] = useState("");
  const [mount, setMount] = useState("");
  const [year, setYear] = useState("");
  const [telfijo, setTelfijo] = useState("");
  const [teltrabajo, setTeltrabajo] = useState("");
  const [celular, setCelular] = useState("");
  const [banco, setBanco] = useState("");
  const [clabe, setClabe] = useState("");
  const [rfc, setRfc] = useState("");
  const [nacion, setNacion] = useState("");
  const [curp, setCurp] = useState("");
  const [tipop, setTipop] = useState("");

  const bankdata = [
    "American Express Bank México)",
    "Banca Afirme",
    "Banca Mifel",
    "BBVA México",
    "Banco Actinver",
    "Banco Azteca",
    "Banco Compartamos",
    "Banco de Inversión Afirme",
    "Banco Inbursa",
    "Banco Inmobiliario Mexicano",
    "Banco Invex",
    "Banco Regional de Monterrey",
    "Banco Santander",
    "BanCoppel",
    "Bank of America Mexico",
    "Banorte",
    "Citibanamex",
    "Consubanco",
    "HSBC México",
    "Scotiabank",
  ];
  const dias = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const meses = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const years = [
    "1940",
    "1941",
    "1942",
    "1943",
    "1944",
    "1945",
    "1946",
    "1947",
    "1948",
    "1949",
    "1950",
    "1950",
    "1951",
    "1952",
    "1953",
    "1954",
    "1955",
    "1956",
    "1957",
    "1958",
    "1959",
    "1960",
    "1960",
    "1961",
    "1962",
    "1963",
    "1964",
    "1965",
    "1966",
    "1967",
    "1968",
    "1969",
    "1970",
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1980",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const tipopersona = ["Fisica", "Moral"];

  const rendimientos = ["Mensual", "Semanal"];

  const [rendimiento, setRendimiento] = useState("");

  const fechai = year + "-" + mount + "-" + day;
  const fn = new Date(fechai);

  const goback = () => {
    goToScreenProfile();
  };

  const submitData = () => {
    if (
      !tipop ||
      !fn ||
      !rfc ||
      !nacion ||
      !curp ||
      !telfijo ||
      !celular ||
      !banco ||
      !clabe ||
      !rendimiento
    ) {
      ToastShowFail();
    } else {
      console.log(
        idUser,
        username,
        apellidop,
        apellidom,
        tipop,
        fn,
        rfc,
        nacion,
        curp,
        telfijo,
        teltrabajo,
        celular,
        banco,
        clabe,
        rendimiento
      );
      axios
        .post(`${URI}/completereg `, {
          idUser,
          username,
          apellidop,
          apellidom,
          tipop,
          fn,
          rfc,
          nacion,
          curp,
          telfijo,
          teltrabajo,
          celular,
          banco,
          clabe,
          rendimiento,
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
            goback();
          }
        });
    }
  };

  return (
    <LinearGradient
      colors={["#0D5C75", "#199FB1", "#04323A"]}
      style={styles.linearGradient}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcomeprofiletxt}>
            Completa el resgistro y comienza a invertir
          </Text>

          <LinearGradient
            colors={["#199FB1", "#0D5C75"]}
            style={styles.linearGradientcardComplete}
          >
            <Image
              style={styles.imgintro}
              source={require("../../../assets/inmo.png")}
            />

            <Text style={styles.txtlog}>Datos generales</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={username}
              name="nombre"
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido paterno"
              value={apellidop}
              name="ap"
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido materno"
              value={apellidom}
              name="am"
            />

            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              defaultButtonText={"Tipo de Persona"}
              data={tipopersona}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setTipop(selectedItem);
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

            <Text style={styles.txtfn}>Fecha de nacimiento</Text>

            <View style={styles.datecard}>
              <SelectDropdown
                dropdownStyle={styles.dropdown1DropdownStyleDate}
                buttonStyle={styles.dropdown1BtnStyleDate}
                data={dias}
                defaultButtonText={"D"}
                onSelect={(selectedItem) => {
                  console.log(day);
                  setDay(selectedItem);
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

              <SelectDropdown
                dropdownStyle={styles.dropdown1DropdownStyleDate}
                buttonStyle={styles.dropdown1BtnStyleDate}
                data={meses}
                defaultButtonText={"M"}
                onSelect={(selectedItem) => {
                  console.log(selectedItem + "Mes");
                  setMount(selectedItem);
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

              <SelectDropdown
                dropdownStyle={styles.dropdown1DropdownStyleDateA}
                buttonStyle={styles.dropdown1BtnStyleDateA}
                data={years}
                defaultButtonText={"A"}
                onSelect={(selectedItem) => {
                  console.log(selectedItem);
                  setYear(selectedItem);
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

            <TextInput
              style={styles.input}
              placeholder="RFC (CON HOMOCLAVE)"
              value={rfc}
              name="rfc"
              onChangeText={(text) => setRfc(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Nacionalidad"
              value={nacion}
              name="nacion"
              onChangeText={(text) => setNacion(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="CURP"
              value={curp}
              name="curp"
              onChangeText={(text) => setCurp(text)}
            />

            <Text style={styles.txtlog}>Datos de contacto</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono fijo"
              value={telfijo}
              name="telfijo"
              onChangeText={(text) => setTelfijo(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="telefono de trabajo "
              value={teltrabajo}
              name="teltrabajo"
              onChangeText={(text) => setTeltrabajo(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Celular"
              value={celular}
              name="celular"
              onChangeText={(text) => setCelular(text)}
            />

            <Text style={styles.txtlog}>Datos Bancarios</Text>

            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              data={bankdata}
              defaultButtonText={"Selecciona un banco"}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setBanco(selectedItem);
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

            <TextInput
              style={styles.inputclabe}
              placeholder="CLABE"
              value={clabe}
              name="clabe"
              onChangeText={(text) => setClabe(text)}
            />
            <Text style={styles.txtlog}>Forma de pago de rendimientos</Text>
            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              defaultButtonText={"Forma de pago de rendimientos"}
              data={rendimientos}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setRendimiento(selectedItem);
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

            <View>
              <TouchableOpacity style={styles.btn112} onPress={submitData}>
                <Text style={styles.txtlogsubmit}>Guardar Datos</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CompleteSignup;
