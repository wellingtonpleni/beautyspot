/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Title } from '../../styles';

import styles from './styles';

const Login = ({navigation}) => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: '',
    });

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Title
                style={styles.title}
                align="center"
                colors="primary">Beauty Spot</Title>
            <View>
                <TextInput
                    label="Email"
                    mode="flat"
                    style={styles.marginBottom}
                    value={credenciais.email}
                    onChangeText={text => setCredenciais({ ...credenciais, email: text })}
                />

                <TextInput
                    label="Senha"
                    mode="flat"
                    style={styles.marginBottom}
                    secureTextEntry
                    value={credenciais.senha}
                    onChangeText={text => setCredenciais({ ...credenciais, senha: text })}
                />

                <Button
                    mode="contained"
                    style={styles.marginBottom}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    Entrar
                </Button>

                <Button
                    style={styles.marginBottom}
                    onPress={() => console.log('Pressed')}
                    theme={{colors: {primary: '#7B2CBF'}}}
                >
                    Cadastre-se
                </Button>

                <Text style={styles.texto}>Todos os direitos Reservados</Text>
            </View>
        </View>
    );
};

export default Login;
