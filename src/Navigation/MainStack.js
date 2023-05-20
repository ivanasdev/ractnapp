import React from "react";

import NavigationStrings from "../Components/NavigationStrings";
import TabRoutes from "./TabRoutes";
import Login from '../Screens/Login/Login'
import Signup from '../Screens/Signup/Signup'
import Profile from '../Screens/Profile/Profile'
import CompleteSignup from '../Screens/Signup/CompleteSignup'
import Beneficiaries from '../Screens/Beneficiaries/Beneficiaries'
import Politic from "../Screens/Signup/Politic";

export default function (Stack){
    return(
        <>
        <Stack.Screen name={NavigationStrings.TABS} component={TabRoutes} />
        <Stack.Screen name={NavigationStrings.SIGNUP} component={Signup}  />
        <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
        <Stack.Screen name={NavigationStrings.PROFILE} component={Profile} />
        <Stack.Screen name={NavigationStrings.COMPLETESIGNUP} component={CompleteSignup} />
        <Stack.Screen name={NavigationStrings.BENEFICIARIES} component={Beneficiaries} />
        <Stack.Screen name={NavigationStrings.POLITICS} component={Politic} />


</>
    );
}