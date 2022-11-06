/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Cover,
    GradientView,
    Title,
    Text,
    Badge,
    Box,
    Touchable,
    Button,
    TextInput
} from '../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../styles/theme.json';

import { useSelector } from 'react-redux';

const Header = () => {

    const {salao} = useSelector(state => state.salao);

    return (
        <>
            <Cover
                image="https://universoretro.com.br/wp-content/uploads/2020/10/salao-new-order-hair.jpg"
                width="100%"
                height="300px"
            >
                <GradientView
                    colors={['#21232F33', '#21232FE6']}
                    hasPadding
                    justify="flex-end"
                >
                    <Badge colors="success">Aberto</Badge>
                    <Title colors="light">Nome Salão</Title>
                    <Text colors="light">Indaiatuba • 1.7kms</Text>
                </GradientView>
            </Cover>
            <Box 
                background="light"
                align="center"
               >
                <Box hasPadding justify="space-between">
                    <Touchable width="50px" direction="column" align="center">
                        <Icon name="phone" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Ligar</Text>
                    </Touchable>

                    <Touchable width="50px" direction="column" align="center">
                        <Icon name="map-marker" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Visitar</Text>
                    </Touchable>

                    <Touchable width="50px" direction="column" align="center">
                        <Icon name="share" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0">Enviar</Text>
                    </Touchable>
                </Box>
                <Box hasPadding direction="column" align="center" justify="center">
                    <Button
                        icon="clock-check-outline"
                        background="primary"
                        mode="contained"
                        uppercase={false}
                    >Agendar Agora</Button>
                    <Text small spacing="10px 0 0">Horários disponíveis</Text>
                </Box>
            </Box>
            <Box hasPadding direction="column" background="light" spacing="10px 0 0">
                <Title small>Serviços (2)</Title>
                <TextInput placeholder="Digite o nome do serviço"/>
            </Box>
        </>
    )
};

export default Header;
