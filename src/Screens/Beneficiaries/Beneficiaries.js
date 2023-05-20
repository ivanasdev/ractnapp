import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import styles from "../../Styles";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import SelectDropdown from "react-native-select-dropdown";
import Form1 from "../../Forms/Form1";
import Form2 from "../../Forms/Form2";

const Beneficiaries = ({ navigation, route }) => {
  const URI = "http://45.80.153.150:5001";

  //DATA OF REST
  const [porcentajeasig, setPorcentajeasig] = useState([]);
  const [nombreb1, setNombreb1] = useState("");
  const [idBene, setIdBene] = useState("");
  const [apellidop, setApellidop] = useState("");
  const [apellidom, setApellidom] = useState("");
  const [data,setData]=useState([])

  //DATA OD ROUTE
  const username = route.params.username;
  const id_User = route.params.id_User;
  const flagbenefit=route.params.flagbenefit

  //DATA FORM
  const ProcentajeTotal = 100;
  const nbeneficiarios = ["1", "2"];
  const [beneficiarios, setBeneficiarios] = useState(0);


  //LOAD DATA BENEFICIARIES
  const loadData = () => {
    axios
      .post(`${URI}/getbeneficiaries`, { id_User })

      .then((res) => {
        //console.log(res);
        console.log(res.data );
        const datos = res.data;
   
        setData(datos)

  
      })

      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <LinearGradient
      colors={["#0D5C75", "#199FB1", "#04323A"]}
      style={styles.linearGradient}
    >
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imgintro}
            source={require("../../../assets/inmo.png")}
          />

          {flagbenefit ? (
            <LinearGradient
              colors={["#0D5C75", "#0101"]}
              style={styles.linearGradientcardasignp}
            >
                    <Text style={styles.welcomeprofiletxtbb}>
                  Hola {username}, se han registrado tus beneficiarios:
                </Text>
          {data.map((item,inddex)=>{
            for( i=0;item;i++){
              return(
                <View style={styles.container}>
          
                <Text style={styles.welcomeprofiletxt1b}>
                  {item.st_Nombre} {item.st_Ap} {item.st_Am}
                </Text>

                <Text style={styles.welcomeprofiletxt1b}>
                  Porcentaje asignado: {item.i_Porcentaje}%
                </Text>
              </View>
              )
            }

          })}

          
            </LinearGradient>
          ) : (
            <View>
              <Text style={styles.welcomeprofiletxt}>
                Registra tus beneficiarios
              </Text>

              <SelectDropdown
                dropdownStyle={styles.dropdown1DropdownStyleben}
                buttonStyle={styles.dropdown1BtnStyleben}
                data={nbeneficiarios}
                defaultButtonText={"Numero de beneficiarios"}
                onSelect={(selectedItem) => {
                  console.log(selectedItem);
                  setBeneficiarios(selectedItem);
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

              {(() => {
                if (beneficiarios == 1) {
                  return (
                    <LinearGradient
                      colors={["#199FB1", "#fff"]}
                      style={styles.linearGradientcardb1}
                    >
                      <View>
                        <Form1 Id_User={id_User} />
                      </View>
                    </LinearGradient>
                  );
                } else if (beneficiarios == 2) {
                  return (
                    <LinearGradient
                      colors={["#199FB1", "#fff"]}
                      style={styles.linearGradientcardb1}
                    >
                      <View>
                        <Form2 Id_User={id_User} />
                      </View>
                    </LinearGradient>
                  );
                }

                return null;
              })()}
            </View>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Beneficiaries;
