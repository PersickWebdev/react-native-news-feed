import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../styles/colors';
import { MenuScreen, ContactsScreen, NewsScreen, NewsItemScreen, LogInScreen, CreateNewsScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={MenuScreen}
                    options={{
                        title: 'Menu',
                        headerStyle: {
                            backgroundColor: colors.black
                        },
                        headerTitleStyle: {
                            color: colors.white,
                        },
                        contentStyle: {
                            backgroundColor: colors.graphite,
                        }
                    }}
                />
                <Stack.Screen
                    name='Contacts'
                    component={ContactsScreen}
                    options={{
                        title: 'Contacts',
                        headerStyle: {
                            backgroundColor: colors.black
                        },
                        headerTitleStyle: {
                            color: colors.white,
                        },
                        contentStyle: {
                            backgroundColor: colors.graphite,
                        }
                    }}
                />
                <Stack.Screen
                    name='News'
                    component={NewsScreen}
                    options={{
                        title: 'News',
                        headerStyle: {
                            backgroundColor: colors.black
                        },
                        headerTitleStyle: {
                            color: colors.white,
                        },
                        contentStyle: {
                            backgroundColor: colors.graphite,
                        }
                    }}
                />
                <Stack.Screen
                    name='NewsItemScreen'
                    component={NewsItemScreen}
                    options={{
                        title: 'News Item',
                        headerStyle: {
                            backgroundColor: colors.black
                        },
                        headerTitleStyle: {
                            color: colors.white,
                        },
                        contentStyle: {
                            backgroundColor: colors.graphite,
                        }
                    }}
                />
                <Stack.Screen
                    name='LogIn'
                    component={LogInScreen}
                    options={{
                        title: 'Log In',
                        headerStyle: {
                            backgroundColor: colors.black
                        },
                        headerTitleStyle: {
                            color: colors.white,
                        },
                        contentStyle: {
                            backgroundColor: colors.graphite,
                        }
                    }}
                />
                <Stack.Screen
                    name='CreateNews'
                    component={CreateNewsScreen}
                    options={{
                        title: 'Create News',
                        headerStyle: {
                            backgroundColor: colors.black
                        },
                        headerTitleStyle: {
                            color: colors.white,
                        },
                        contentStyle: {
                            backgroundColor: colors.graphite,
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};