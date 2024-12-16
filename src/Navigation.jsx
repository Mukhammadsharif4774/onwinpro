import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import OnwinHomeScreen from './pages/OnwinHomeScreen';
import OnwinCartScreen from './pages/OnwinCartScreen';
import OnwinCartSuccessScreen from './pages/OnwinCartSuccessScreen';
import OnwinReservationScreen from './pages/OnwinReservationScreen';
import OnwinReservationSuccessScreen from './pages/OnwinReserveSuccessScreen';
import OnwinContactsScreen from './pages/OnwinContactsScreen';
import CloseIcon from './assets/delete_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import OnwinTranslationsScreen from './pages/OnwinTranslationsScreen';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.main,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'ГЛАВНАЯ', screen: 'OnwinHomeScreen'},
    {label: 'КОРЗИНА', screen: 'OnwinCartScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'OnwinTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'OnwinContactsScreen'},
    {label: 'РЕЗЕРВ СТОЛИКА', screen: 'OnwinReservationScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={
              screen === 'OnwinHomeScreen'
                ? styles.drawerItemFirst
                : styles.drawerItem
            }>
            <Text
              style={
                screen === 'OnwinHomeScreen'
                  ? styles.itemTextFirst
                  : styles.itemText
              }>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('OnwinCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );
}

const drawerScreens = [
  {name: 'OnwinHomeScreen', component: OnwinHomeScreen},
  {name: 'OnwinCartScreen', component: OnwinCartScreen},
  {name: 'OnwinCartSuccessScreen', component: OnwinCartSuccessScreen},
  {name: 'OnwinReservationScreen', component: OnwinReservationScreen},
  {
    name: 'OnwinReservationSuccessScreen',
    component: OnwinReservationSuccessScreen,
  },
  {name: 'OnwinContactsScreen', component: OnwinContactsScreen},
  {name: 'OnwinTranslationsScreen', component: OnwinTranslationsScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 40,
  },
  logo: {
    width: width * 0.8,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: width,
  },
  drawerItemFirst: {
    justifyContent: 'center',
    width: '75%',
    marginTop: 15,
    backgroundColor: COLORS.pink,
    paddingVertical: 12,
    borderRadius: 4,
  },
  drawerItem: {
    justifyContent: 'center',
    width: '75%',
    marginTop: 15,
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 23,
    fontFamily: FONTS.black,
    color: COLORS.black,
    textAlign: 'center',
  },
  itemTextFirst: {
    fontSize: 23,
    fontFamily: FONTS.black,
    color: COLORS.white,
    textAlign: 'center',
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
