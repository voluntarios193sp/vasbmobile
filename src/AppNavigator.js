import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useScreens } from 'react-native-screens';

import Splash from "./components/Splash";
import Home from './components/Home';
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

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Splash: { screen: Splash },  
  Cadastro: { screen: Cadastro },
  CadastroObrigado: { screen: CadastroObrigado },
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
  defaultNavigationOptions: {
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
}
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;