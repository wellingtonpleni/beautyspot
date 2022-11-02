/* eslint-disable prettier/prettier */
import React from 'react';

import { Box, Text, Cover, Button } from '../../../styles';
import theme from '../../../styles/theme.json';

const EspecialistaPicker = () => {
    return (
        <>
            <Text bold color="dark" hasPadding>Gostaria de trocar o(a) especialista?</Text>
            <Box align="center" spacing="0 20px 0" removePaddingBottom>
                <Box align="center">
                    <Cover
                        width="45px"
                        height="45px"
                        circle
                        image="https://cdn.eutotal.com/imagens/chanel-de-bico.jpg"
                    />
                    <Text small>Amanda Rodrigues</Text>
                </Box>
                <Box>
                    <Button
                        uppercase={false}
                        textColor="muted"
                        background={theme.colors.light}
                        mode="contained"
                    >Trocar Especialista</Button>
                </Box>
            </Box>
        </>
    );
};

export default EspecialistaPicker;
