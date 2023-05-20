import React from "react";
import { NavigationContainer } from "@react-navigation/native";;
import MainStack from "./MainStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();

const Routes=()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
 
       
         
         }}>
            
            {MainStack(Stack)}
          

        </Stack.Navigator>
    </NavigationContainer>

    )
}

export default Routes