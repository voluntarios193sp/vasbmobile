import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { useScreens } from 'react-native-screens';

import Splash from "./components/Splash";
import Home from './components/Home';

import ValidaVASB from './components/ValidaVASB'
import Cadastro from "./components/Cadastro";
import CadastroObrigado from "./components/CadastroObrigado";

import EmergenciaIncendio from "./components/EmergenciaIncendio";
import EmergenciaInformar from "./components/EmergenciaInformar";
import EmergenciaAtender from "./components/EmergenciaAtender";
import PrimeirosSocorros from "./components/PrimeirosSocorros";
import Doacao from "./components/Doacao";
import Perfil from "./components/Perfil";
import Informacao from "./components/Informacao";
import Calendario from "./components/Calendario";
import Hospitais from "./components/Hospitais";

useScreens();

const defaultNavigationOptionsStyle = {
  headerStyle: {
    height: 120,
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: "Arial",
    fontSize: 16
  },
}

const CadastroNav = createStackNavigator({
    Validacao: { screen: ValidaVASB},
    Cadastro: { screen: Cadastro },
    CadastroObrigado: { screen: CadastroObrigado },
  },
  {
    initialRouteName: 'Validacao',
    defaultNavigationOptions: defaultNavigationOptionsStyle
  }
)

const MainNavigator = createStackNavigator({
    Home: { screen: Home },    
    Incendio: { screen: EmergenciaIncendio },
    Emergencia: { screen: EmergenciaInformar },
    EmergenciaAtender: { screen: EmergenciaAtender },
    PrimeirosSocorros: { screen: PrimeirosSocorros },
    Doacao: { screen: Doacao },
    Perfil: { screen: Perfil },
    Informacao: { screen: Informacao },
    Calendario: { screen: Calendario },
    Hospitais: { screen: Hospitais }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: defaultNavigationOptionsStyle
  }
);

const AppNavigator = createSwitchNavigator({
  SplashLoading : Splash,
  App: MainNavigator,
  NovoUser: CadastroNav
});

const AppContainer = createAppContainer(
  AppNavigator,
  {
    initialRouteName: 'SplashLoading'
  }
)

export default AppContainer;