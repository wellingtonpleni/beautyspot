/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';

import { useNavigation, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../../services/api';

import { Image, View } from 'react-native';
import theme from '../../styles/theme.json';
import styles from './styles';
import { Title } from '../../styles';

import { ActivityIndicator } from 'react-native';


const Preload = () => {

    const navigation = useNavigation();
    useEffect(()=> {
        const checkToken = async() => {
            const token = await AsyncStorage.getItem('token');
            if (token) { //Se o token existir, verificamos se é válido
              let res = await Api.checkToken(token);
              if (res.access_token) { //Se retornou o token, está ok
                await AsyncStorage.setItem('token', res.access_token);
                navigation.navigate('Tabs');
              } else {
                  navigation.navigate('Login'); //Token é inválido
              }
            } else { //Token não existe no AsyncStorage
                  navigation.navigate('Login');
            }
        };
    checkToken();
    },[]);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <Title align="center" colors="primary">Beauty Spot</Title>
            <ActivityIndicator style={styles.indicator} size="large" color={theme.colors.primary} />
        </View>
    );
};

export default Preload;
