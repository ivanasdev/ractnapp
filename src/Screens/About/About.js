import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,

  } from 'react-native';

  import styles from "../../Styles";

  import { LinearGradient } from "expo-linear-gradient";


  const About =()=>{
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
              colors={['#E2DAD7', '#E2DAD7']}
              style={styles.linearGradientcard2}>
              <Text style={styles.TextBenfits}>Quienes somos ?</Text>
              <View>
                <Text style={styles.TexContentBenefits}>
           
                  Somos una empresa mexicana enfocada en compartir los bebeficios
                  de invertir en el sector inmobiliario con todos nuestros
                  inversionistas.
                </Text>
              </View>
              <View>
                <Text style={styles.TexContentBenefits}>
                  Gracias a nuestra experiencia en el sector inmobiliario, opdemos
                  brindar ademas de solidez, una tasa de inter&eacute;s
                  competitiva y superior a la referencia de mercado.
                </Text>
              </View>
  
              <View>
                <Text style={styles.TexContentBenefits}>
                  Nuestro portafolio permite brindarte certeza a su
                  inversi&oacute;n
                </Text>
              </View>
              <View>
                <Text style={styles.TexContentBenefits}>
                  Todas nuestras asesor&iacute;as son personalizadas, enfocadas al
                  cumplimiento de necesidades y objetivas.
                </Text>
              </View>
  
              <View>
                <Image
                  style={styles.logocheck}
                  source={require('../../../assets/icons/lista-de-verificacion.png')}
                />
  
                <Text style={styles.TexContentBenefitslist}>
                  Tenemos el perfecto balance entre capitalizaci&oacute;n y
                  colocaci&oacute;n de la cartera de inmuebles
                </Text>
              </View>
  
              <View>
                <Image
                  style={styles.logocheck}
                  source={require('../../../assets/icons/lista-de-verificacion.png')}
                />
  
                <Text style={styles.TexContentBenefitslist}>
                  Nuestro portafolio inmobiliario cuenta con el rendimiento
                  m&aacute;s alto del mercado
                </Text>
              </View>
  
              <View>
                <Image
                  style={styles.logocheck}
                  source={require('../../../assets/icons/lista-de-verificacion.png')}
                />
  
                <Text style={styles.TexContentBenefitslist}>
                  Nuestra cartera consolidada de m&aacute;s de 3,000 inmuebles en
                  ciclo de venta
                </Text>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </LinearGradient>

    )
  }

  export default About