import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DailyEntryScreen from './screens/DailyEntryScreen';
import ToolsScreen from './screens/ToolsScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

// Create the Stack Navigator for the Home screen
const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Welcome Back" component={HomeScreen} />
      <HomeStack.Screen name="Daily Entry" component={DailyEntryScreen} />
    </HomeStack.Navigator>
  );
};

export default function App() {


  return (
    <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Daily Entry" component={DailyEntryScreen} />
            <Tab.Screen name="Tools" component={ToolsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
