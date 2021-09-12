import React, { useMemo, useState, useCallback } from "react";
import { View, ActivityIndicator, StyleSheet, StatusBar } from "react-native";
import Snackbar, { SnackBarOptions } from "react-native-snackbar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { REDUX_TYPE, LOADING_TYPE } from "./redux/redux-type-saga";
import { Record, Collection } from "immutable";
import { IStore } from "./redux/redux-state";
import { sGetIndicatorState } from "./redux/selectors";
import { Screens } from "./NavigationConfig";
import navigationService from "./common/navigation-service";
import { useTranslation } from "react-i18next";
import Login from "./views/Login";
import Home from "./views/Home";
import Library from "./views/Library";
import Quiz from "./views/Quiz";
import News from "./views/News";
import AboutUs from "./views/AboutUs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const isLoadingSelector = (store: Record<IStore> & Readonly<IStore>) => {
  const count: Collection<string, any> = store.getIn([
    REDUX_TYPE,
    LOADING_TYPE,
  ]);
  return !!count || sGetIndicatorState(store);
};

const Tabbar: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={Screens.Home}>
      <Tab.Screen
        name={Screens.Home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Screens.Library}
        component={Library}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Screens.Quiz}
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Screens.AboutUs}
        component={AboutUs}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
const AppContainer: React.FC = (props) => {
  const [t] = useTranslation();

  const [visible, setVisible] = useState(false);
  const isLoading = useSelector(isLoadingSelector);
  // callbacks
  const showAlert = useCallback((options: SnackBarOptions) => {
    Snackbar.show(options);
  }, []);
  const _updateNavigator = useCallback((navigatorRef) => {
    navigationService.setTopLevelNavigator(navigatorRef);
  }, []);
  // memos
  const screenProps = useMemo(() => {
    return {
      setHudVisible: setVisible,
      showAlert,
    };
  }, []);
  const IndicatorView = useMemo(() => {
    if (visible || isLoading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center" },
          ]}
        >
          <StatusBar barStyle="dark-content" />
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return null;
  }, [visible, isLoading]);
  const NavigationView = useMemo(() => {
    return (
      <NavigationContainer ref={_updateNavigator}>
        <Stack.Navigator initialRouteName={Screens.Home}>
          <Stack.Screen
            name={Screens.Tabbar}
            component={Tabbar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Screens.News}
            component={News}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }, [screenProps, _updateNavigator]);
  return (
    <React.Fragment>
      {NavigationView}
      {IndicatorView}
    </React.Fragment>
  );
};

export default AppContainer;
