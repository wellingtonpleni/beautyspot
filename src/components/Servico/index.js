/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Box, Touchable, Cover, Title, Button } from '../../styles';

const servico = () => {
    return(
        <Touchable height="100px" hasPadding background="light" align="center">
            <Cover image="https://salaovirtual.org/wp-content/uploads/2022/02/Corte-no-ombro.jpg"/>
            <Box direction="column">
                <Text bold color="dark">Corte de cabelo</Text>
                <Text small>R$ 60 • 30 mins</Text>
            </Box>
            <Box>
                <Button 
                    icon="clock-check-outline"
                    background="success"
                    mode="contained"
                    >Agendar
                </Button>
            </Box>
        </Touchable>
    );
};

export default servico;