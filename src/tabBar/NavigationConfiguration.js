import { TabNavigator } from 'react-navigation';
import SuperHeroesList from '../tabOne/view/superheroesList';
import ScondScreen from '../tabTwo/view/ScondScreen';

 export const routeConfiguration = {
  TabOneNavigation: { screen: SuperHeroesList },
  TabTwoNavigation: { screen: ScondScreen }  
}

const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'yellow',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

