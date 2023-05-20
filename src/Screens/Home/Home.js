import React from 'react';
import { Text, View ,ScrollView,Image,Pressable} from 'react-native';
import styles from '../../Styles';
import { LinearGradient } from 'expo-linear-gradient';

import NavigationStrings from '../../Components/NavigationStrings';


const HomePage=({navigation})=>{

    const goToScreen = () => {
        navigation.navigate(NavigationStrings.LOGIN, {title: 'INICIO'});
      };
    
      const gotoabout = () => {
        navigation.navigate(NavigationStrings.ABOUT, {title: 'ESto es un test'});
      };
      const goToScreenregister = () => {
        navigation.navigate(NavigationStrings.SIGNUP, {title: 'SIGNUP'});
      };
      const goToScreenUS = () => {
        navigation.navigate(NavigationStrings.ABOUT, {title: 'NOSOTROS'});
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
  
            <Text style={styles.introtxt}>Haz crecer tu patrimonio</Text>
            <Text style={styles.cursitxt}>
              invirtiendo con respaldo inmobiliario
            </Text>
  
            <LinearGradient
              colors={['#E2DAD7', '#E2DAD7']}
              style={styles.linearGradientcard}>
              <Text style={styles.card1}>
                Tenemos el perfecto balance entre capitalización y colocación de
                la cartera de inmuebles.
              </Text>
              <Image
                style={styles.imgcard1}
                source={require('../../../assets/icons/justa.png')}
              />
              <View>
                <Pressable onPress={goToScreenregister} style={styles.btn1}>
                  <Text style={styles.btn1txt}> Quiero Invertir</Text>
                </Pressable>
              </View>
  
            </LinearGradient>
  
            <LinearGradient
              colors={['#E2DAD7', '#E2DAD7']}
              style={styles.linearGradientcard1}>
              <Text style={styles.TextBenfits}>
                Beneficios de invertir con nosotros
              </Text>
              <View>
                <Text style={styles.TexContentBenefits}>Rendiminetos superiores a los del mercado</Text>
                <Image
                  style={styles.imgcard1}
                  source={require('../../../assets/icons/business-and-finance.png')}
                />
              </View>
              <View>
                <Text style={styles.TexContentBenefits}>Inversi&oacute;n garantizada</Text>
                <Image
                  style={styles.imgcard1}
                  source={require('../../../assets/icons/bars.png')}
                />
              </View>
  
              <View>
                <Text style={styles.TexContentBenefits}>
                  Nuestro portafolio permite brindarte certeza a su
                  inversi&oacute;n
                </Text>
                <Image
                  style={styles.imgcard1}
                  source={require('../../../assets/icons/hand.png')}
                />
              </View>
              <View>
                <Text style={styles.TexContentBenefits}>Taza de inter&eacute;s fija</Text>
                <Image
                  style={styles.imgcard1}
                  source={require('../../../assets/icons/money.png')}
                />
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </LinearGradient>

    )
}

export default HomePage