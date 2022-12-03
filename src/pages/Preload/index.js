/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import theme from '../../styles/theme.json';
import styles from './styles';
import { Title } from '../../styles';

import { ActivityIndicator } from 'react-native';


const Preload = () => {

    const navigation = useNavigation();
    setTimeout(() => {
        navigation.navigate('Login');
    }, 3000);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <Title align="center" colors="primary">Beauty Spot</Title>
            <ActivityIndicator style={styles.indicator} size="large" color={theme.colors.primary} />
        </View>
    );
};

export default Preload;
