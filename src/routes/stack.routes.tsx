import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSave } from "../pages/PlantSave";
import { PlantProps } from "../pages/PlantSelect";

import colors from "../styles/colors";
import AuthRoutes from "./tab.routes";

export type RootStackParamList = {
  Welcome: undefined;
  UserIdentification: undefined;
  Confirmation: {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: string;
    nextScreen: string;
  };
  PlantSelect: {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: string;
    nextScreen: "MyPlants";
  };
  AuthRoutes: undefined;
  PlantSave: { plant: PlantProps };
  MyPlants: undefined;
};

const stackRoutes = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />

    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen name="Confirmation" component={Confirmation} />

    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />

    <stackRoutes.Screen name="PlantSave" component={PlantSave} />

    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
