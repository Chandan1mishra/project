
import React from 'react';
import {

    StyleSheet

    } from 'react-native';
import Signin from './src/Signin';
import Login from './src/login';
import Restaurent from './src/Restaurants';
import ADD from './src/AddtoCart'
import Food from './src/FoodItem'
import UserProfile from './src/userProfile'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import rest2 from './src/rest2'
import rest3 from './src/rest3'
import rest4 from './src/rest4'
import rest5 from './src/rest5'
const Stack = createNativeStackNavigator();

class App extends React.Component {
    
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
               
                 <Stack.Screen
                        name="Signin "
                        component={Signin}
                        options={{ headerShown: false }}
                    />    
                   <Stack.Screen
                        name="login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Restaurants'
                        component={Restaurent}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="FoodItem"
                        component={Food}
                        options={{ headerShown: false }}
                        />
                          <Stack.Screen
                        name="Food"
                        component={rest2}
                        options={{ headerShown: false }}
                        />
                          <Stack.Screen
                        name="Fooditem3"
                        component={rest3}
                        options={{ headerShown: false }}
                        />
                         <Stack.Screen
                        name="Fooditem4"
                        component={rest4}
                        options={{ headerShown: false }}
                        />
                         <Stack.Screen
                        name="Fooditem5"
                        component={rest5}
                        options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='Add'
                            component={ADD}
                            options={{headerShown: false}}
                            />
                        <Stack.Screen
                             name='profile'
                             component={UserProfile}
                             options={{headerShown: false}}
                             />
                </Stack.Navigator>
            </NavigationContainer>
           
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }

});
export default App;