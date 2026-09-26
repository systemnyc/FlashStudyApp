import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./app/types/navigation";
import { CardsProvider } from "./app/context/CardsContext";

import HomeScreen from "./app/screens/HomeScreen";
import RandomCardScreen from "./app/screens/RandomCardScreen";
import CategoriesScreen from "./app/screens/CategoriesScreen";
import CategoryDetailScreen from "./app/screens/CategoryDetailScreen";
import AddCardScreen from "./app/screens/AddCardScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <CardsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RandomCard" component={RandomCardScreen} />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
          <Stack.Screen name="AddCard" component={AddCardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CardsProvider>
  );
}
